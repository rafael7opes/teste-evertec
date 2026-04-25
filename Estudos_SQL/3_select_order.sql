-- Seleciona o nome e o código (id) dos clientes, renomeando o id para 'codigo' e ordenando pelo nome
SELECT id AS codigo, nome
FROM clientes
ORDER BY nome;