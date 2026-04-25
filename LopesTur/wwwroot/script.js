// URL da API para acessar os pontos turísticos
const API_URL = '/api/PontosTuristicos';

// Variáveis para controlar a paginação
let pontosFiltrados = []; // Guarda os pontos após a busca para dividir nas páginas
let paginaAtual = 1;
const itensPorPagina = 3; // Limite de itens por tela

// Função para salvar um novo ponto turístico
async function salvar() {
    let ponto = {
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
        localizacao: document.getElementById("localizacao").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    };

    try {
        // Envia os dados para a API usando POST
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ponto)
        });

        if (response.ok) {
            alert("Salvo com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Erro ao salvar.");
        }
    } catch (erro) {
        console.error("Erro de conexão:", erro);
        alert("Não foi possível conectar ao servidor.");
    }
}

// Função que busca os dados da API e prepara para exibir na tela
async function carregar() {
    let lista = document.getElementById("lista");
    if (!lista) return;

    try {
        // Busca os dados da API
        const response = await fetch(API_URL);
        const dados = await response.json();

        let campoBusca = document.getElementById("busca");
        let busca = campoBusca ? campoBusca.value.toLowerCase() : "";

        // Filtra pela busca (nome, descrição ou localização) e guarda na variável da paginação
        pontosFiltrados = dados.filter(function (item) {
            return item.nome.toLowerCase().includes(busca) ||
                   item.descricao.toLowerCase().includes(busca) ||
                   item.localizacao.toLowerCase().includes(busca);
        });

        // Sempre que carregar a página ou digitar na busca, volta para a página 1
        renderizarPagina(1);

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

// Função responsável por recortar a lista e exibir apenas os itens da página atual
function renderizarPagina(numeroPagina) {
    paginaAtual = numeroPagina;
    let lista = document.getElementById("lista");
    if (!lista) return;

    // Limpa a lista antes de renderizar
    lista.innerHTML = "";

    // Lógica para selecionar quais 3 itens aparecem (Ex: Página 1 = itens 0, 1 e 2)
    const inicio = (numeroPagina - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensExibidos = pontosFiltrados.slice(inicio, fim);

    itensExibidos.forEach(function (item) {
        let li = document.createElement("li");

        let titulo = document.createElement("strong");
        titulo.textContent = item.nome;

        let desc = document.createElement("p");
        desc.textContent = item.descricao;

        let btn = document.createElement("button");
        btn.textContent = "Ver detalhes";

        btn.onclick = function () {
            // Salva o item selecionado para usar na tela de detalhe
            localStorage.setItem("selecionado", JSON.stringify(item));
            window.location.href = "detalhe.html";
        };

        li.appendChild(titulo);
        li.appendChild(desc);
        li.appendChild(btn);
        lista.appendChild(li);
    });

    // Cria os botões de navegação lá embaixo (1, 2, 3...)
    criarBotoesPaginacao();
}

// Função que desenha os botões de página na tela
function criarBotoesPaginacao() {
    const divPaginacao = document.getElementById("paginacao");
    if (!divPaginacao) return;
    
    // Limpa os botões antigos antes de recriar
    divPaginacao.innerHTML = "";

    // Calcula quantas páginas vamos ter no total (Ex: 6 itens / 3 = 2 páginas)
    const totalPaginas = Math.ceil(pontosFiltrados.length / itensPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        let botao = document.createElement("button");
        botao.textContent = i;
        botao.style.marginRight = "5px";
        botao.style.padding = "5px 10px";
        botao.style.cursor = "pointer";

        // Destaca a página onde o usuário está com uma cor diferente
        if (i === paginaAtual) {
            botao.style.backgroundColor = "#007bff";
            botao.style.color = "white";
        }

        // Quando clicar no botão, muda a página
        botao.onclick = function () {
            renderizarPagina(i);
        };
        
        divPaginacao.appendChild(botao);
    }
}

// Função para excluir um ponto turístico do Banco de Dados
async function excluirPonto(id) {
    // Confirmação para o usuário não clicar sem querer e perder o dado
    if (confirm("Tem certeza que deseja excluir este ponto turístico?")) {
        try {
            // Chama a API com o método DELETE passando o ID (Ex: /api/PontosTuristicos/1)
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert("Excluído com sucesso!");
                localStorage.removeItem("selecionado"); // Limpa o "post-it"
                window.location.href = "index.html";    // Volta para a página inicial
            } else {
                alert("Erro ao excluir. Verifique o servidor.");
            }
        } catch (erro) {
            console.error("Erro ao tentar excluir:", erro);
            alert("Não foi possível conectar ao servidor.");
        }
    }
}

// Executa automaticamente ao abrir a página
carregar();