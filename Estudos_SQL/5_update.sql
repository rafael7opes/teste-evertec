-- Atualiza o campo estado para 'SP' em todos os registros que são 'PR' na tabela cidades
UPDATE cidades
SET estado = 'SP'
WHERE estado = 'PR';