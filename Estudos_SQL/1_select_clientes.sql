-- Seleciona o nome dos clientes que residem na cidade de 'Tupa' utilizando a cláusula EXISTS
SELECT nome
FROM clientes c
WHERE EXISTS (
  SELECT 1
  FROM cidades ci
  WHERE ci.id = c.cidade_id
  AND ci.nome = 'Tupa'
);