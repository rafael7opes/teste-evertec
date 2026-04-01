# Desafio Técnico - Analista de Sistemas Jr | Evertec

Este repositório contém a resolução do teste técnico para a vaga de Analista de Sistemas Jr na Evertec. O projeto foi dividido em três frentes: Lógica, Banco de Dados (SQL) e Desenvolvimento Web com .NET.

---

## 1. TurismoApp (Aplicação Web)

Esta é a parte principal do teste. Desenvolvi uma página web para o gerenciamento de pontos turísticos, aplicando os conhecimentos de Back-end e Front-end que estou desenvolvendo no meu segundo ano de Análise e Desenvolvimento de Sistemas na UNINTER.

* **O que utilizei:** C# (ASP.NET Core), SQLite para o banco de dados, além de HTML, CSS e JavaScript.
* **Como funciona:**
* **Ponte de Dados:** O sistema utiliza o **Entity Framework Core** para realizar a leitura e a gravação de dados no arquivo `banco.db`. Ele serve como o "tradutor" entre o meu código C# e o banco de dados.

* **Back-end e API:** No C#, configurei as rotas via Controllers que funcionam como o "cérebro" da aplicação. Elas recebem as solicitações da página, processam as informações e garantem que tudo seja salvo ou removido corretamente no banco de dados.

* **Front-end e Interatividade:** Criei uma interface simples e funcional para o usuário gerenciar os locais. Usei JavaScript para que, ao clicar em comandos como o de excluir, a alteração apareça na tela sem precisar recarregar a página inteira, tornando o uso do sistema muito mais prático.

## 2. Teste SQL (Scripts)

Pasta: `Teste_SQL`

Nesta pasta, organizei 8 scripts SQL que respondem aos cenários técnicos exigidos no edital.

* **O que apliquei:** Consultas com `JOIN` e `EXISTS`, comandos de manutenção (`INSERT`, `UPDATE`, `DELETE`) e a criação de objetos como `VIEW` e `STORED PROCEDURE` com validações.

## 3. Teste de Lógica (Algoritmo)

Pasta: `Algoritmo logica`

Apresento um algoritmo passo a passo para a troca de um pneu furado, focado em segurança e lógica de processos.

* **Diferencial:** Incluí a validação de pré-requisitos, como verificar a disponibilidade do estepe e das ferramentas antes de iniciar o trabalho.

---

## Como rodar o projeto na sua máquina

Para avaliar a aplicação Web (`TurismoApp`), siga estes passos:

### Pré-requisitos

* Ter o [SDK do .NET](https://dotnet.microsoft.com/download) instalado.

### Passo a Passo

1. **Clone o repositório**

Abra o seu terminal e digite:
```bash
git clone https://github.com/rafael7opes/teste-evertec.git
```

2. **Entre na pasta da aplicação**
```bash
cd teste-evertec/TurismoApp
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
