# Desafio Técnico - Analista de Sistemas Jr | Evertec

Este repositório contém a resolução do teste técnico para a vaga de Analista de Sistemas Júnior na Evertec. O projeto foi dividido em três partes: Lógica, SQL e Desenvolvimento Web com .NET.

---

## 💻 1. TurismoApp (Aplicação Web)
Esta é a parte principal do desafio. Desenvolvi uma página web para gerenciar pontos turísticos, aplicando o que estou aprendendo no meu curso de Análise e Desenvolvimento de Sistemas na UNINTER.

* **O que utilizei:** C# (ASP.NET Core), SQLite para o banco de dados, além de HTML, CSS e JavaScript.
* **Como funciona:**
    * O sistema usa o **Entity Framework Core** para ler e salvar os dados no arquivo `banco.db`.
    * No Back-end, criei as rotas que entregam os dados para a tela.
    * No Front-end, a página mostra a lista de locais de forma dinâmica, buscando as informações direto do servidor.

## 🗄️ 2. Teste SQL (Scripts)
Pasta: `Teste_SQL`
Aqui estão os 8 scripts SQL solicitados. Eles cobrem desde consultas simples até comandos mais avançados.
* **O que apliquei:** Consultas com `JOIN` e `EXISTS`, comandos de manutenção (`INSERT`, `UPDATE`, `DELETE`) e a criação de uma `VIEW` e uma `STORED PROCEDURE`.

## 🧠 3. Teste de Lógica (Algoritmo)
Pasta: `Algoritmo logica`
Criei um algoritmo passo a passo para a troca de um pneu furado. 
* **Diferencial:** Foquei na lógica de validação. O sistema (ou a pessoa) verifica se o estepe e as ferramentas estão disponíveis antes de começar o trabalho, evitando erros no processo.

---

## 🚀 Como rodar o projeto na sua máquina

Para testar a aplicação Web (`TurismoApp`), siga estes passos:

### Pré-requisitos
* Ter o [SDK do .NET](https://dotnet.microsoft.com/download) instalado.

### Passo a Passo

1. **Clone o repositório**
Abra o seu terminal e digite:
```bash
git clone https://github.com/rafael7opes/teste-evertec.git

2. **Entre na pasta da aplicação**
cd teste-evertec/TurismoApp

3. **Rode o projeto**
dotnet run

3. **Acesse no navegador**
O terminal vai mostrar um link (geralmente http://localhost:5168 ou http://localhost:5000). Basta copiar e colar no seu navegador para ver o site funcionando.

Desenvolvido por Rafael da Silva Lopes
