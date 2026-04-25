# Projeto de Estudos - Analista de Sistemas | LopesTur

Este repositório contém um projeto focado no aprimoramento prático em desenvolvimento de software. O projeto foi dividido em três frentes: Lógica, Banco de Dados (SQL) e Desenvolvimento Web com .NET.

---

## 1. LopesTur (Aplicação Web)

Esta é a parte principal do projeto. Desenvolvi uma página web para o gerenciamento de pontos turísticos, aplicando os conhecimentos de Back-end e Front-end que estou desenvolvendo no meu segundo ano de Análise e Desenvolvimento de Sistemas na UNINTER.

* **O que utilizei:** C# (ASP.NET Core), SQLite para o banco de dados, além de HTML, CSS e JavaScript.

* **Como funciona:**

* **Ponte de Dados:** O sistema utiliza o **Entity Framework Core** para realizar a leitura e a gravação de dados no arquivo `banco.db`. Ele serve como o "tradutor" entre o meu código C# e o banco de dados.

* **Back-end e API:** No C#, a lógica de rotas foi estruturada via Controllers. Eles são os responsáveis por receber as requisições da interface, processar os dados e coordenar as operações de leitura, gravação e exclusão diretamente no banco de dados.

* **Front-end e Interatividade:** Criei uma interface simples e funcional para o usuário gerenciar os locais. Usei JavaScript para que, ao clicar em comandos como o de excluir, a alteração apareça na tela sem precisar recarregar a página inteira, tornando o uso do sistema muito mais prático.

---

## 2. Estudos SQL (Scripts)

Pasta: `Estudos_SQL`

Nesta pasta, organizei 8 scripts SQL práticos para exercitar cenários técnicos de manipulação de dados.

* **O que apliquei:** Consultas com `JOIN` e `EXISTS`, comandos de manutenção (`INSERT`, `UPDATE`, `DELETE`) e a criação de objetos como `VIEW` e `STORED PROCEDURE` com validações.

---

## 3. Lógica de Processos (Algoritmo)

Pasta: `Algoritmo logica`

Apresento um algoritmo passo a passo para a troca de um pneu furado, focado em segurança e lógica de processos.

* **Diferencial:** Inclui a validação de pré-requisitos, como verificar a disponibilidade do estepe e das ferramentas antes de iniciar o trabalho.

---

## Como rodar o projeto na sua máquina

Para avaliar a aplicação Web (`LopesTur`), siga estes passos:

### Pré-requisitos

* Ter o [SDK do .NET](https://dotnet.microsoft.com/pt-br/download) instalado.

### Passo a Passo

1. **Clone o repositório**

Abra o seu terminal e digite:

```bash
git clone https://github.com/rafael7opes/projeto-turismo.git
```

2. **Entre na pasta da aplicação**

```bash
cd projeto-turismo/LopesTur
```

3. **Rode o projeto**

Execute o comando abaixo para compilar e iniciar o servidor:

```bash
dotnet run
```

4. **Acesse no navegador**

O terminal exibirá o link local da aplicação (exemplo: `http://localhost:5168`). Basta copiar o link e colar no seu navegador para testar.

---

*Desenvolvido por Rafael da Silva Lopes*