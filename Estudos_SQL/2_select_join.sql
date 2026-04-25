-- Seleciona o nome do cliente e o nome da cidade utilizando JOIN
SELECT c.nome, ci.nome AS cidade
FROM clientes c
JOIN cidades ci ON c.cidade_id = ci.id;