# Desafio Técnico - Analista de Sistemas Jr (.NET) | Evertec

Este repositório contém a resolução completa do teste técnico para a vaga de Analista de Sistemas Júnior na **Evertec**. O desafio foi estruturado em três frentes: Lógica, Banco de Dados (SQL) e Desenvolvimento Web.

---

## 1. TurismoApp (Aplicação Web - Principal)
A parte principal do desafio. É uma aplicação Web full-stack focada no gerenciamento de pontos turísticos.

* **Tecnologias:** C# (ASP.NET Core), SQLite, HTML5, CSS3 e JavaScript.
* **Conceitos Aplicados:**
    * **Back-end:** Criação de rotas via Controllers, injeção de dependência e persistência de dados.
    * **Banco de Dados:** Uso do **Entity Framework Core** para comunicação com o banco de dados `SQLite` de forma leve e direta (o arquivo `banco.db` já contém os dados e a tabela mapeada).
    * **Front-end:** Consumo de dados do back-end utilizando arquivos estáticos configurados na pasta `wwwroot`.
* **Funcionalidades:** Listagem e gerenciamento dinâmico dos pontos turísticos salvos no banco de dados.

## 2. Teste SQL (Scripts)
Pasta: `Teste_SQL`
Conjunto de 8 arquivos `.sql` respondendo aos cenários exigidos no edital.
* **Conceitos Aplicados:** Consultas avançadas (uso de `JOIN` e `EXISTS`), manipulação de registros (`INSERT`, `UPDATE`, `DELETE`) e criação de objetos estruturais de banco de dados (`VIEW` e `STORED PROCEDURE` com validação condicional).

## 3. Teste de Lógica (Algoritmo)
Pasta: `Algoritmo logica`
* **Conceitos Aplicados:** Criação de um algoritmo passo a passo para a troca de um pneu furado. O diferencial foi a aplicação de lógica de programação no mundo real: incluí a validação de pré-requisitos (verificar o estepe antes de iniciar) e protocolos de segurança e encerramento.

---

## Como rodar o projeto localmente

Para avaliar a aplicação Web (`TurismoApp`) na sua máquina, siga os passos abaixo:

### Pré-requisitos
* Ter o [SDK do .NET](https://dotnet.microsoft.com/download) instalado na sua máquina.
* Opcional: Git instalado para clonar o repositório.

### Passo a Passo

1. **Clone o repositório**
Abra o seu terminal e digite:
```bash
git clone https://github.com/rafael7opes/teste-evertec.git
