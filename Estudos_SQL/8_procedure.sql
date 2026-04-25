-- Cria um procedimento para manipular a tabela cidades (INSERT, UPDATE ou DELETE) via parâmetro
DELIMITER //

CREATE PROCEDURE manipular_cidades(
    IN acao VARCHAR(10),
    IN p_id INT,
    IN p_nome VARCHAR(100),
    IN p_estado VARCHAR(2)
)
BEGIN

    IF acao = 'INSERT' THEN
        INSERT INTO cidades (nome, estado)
        VALUES (p_nome, p_estado);

    ELSEIF acao = 'UPDATE' THEN
        UPDATE cidades
        SET nome = p_nome,
            estado = p_estado
        WHERE id = p_id;

    ELSEIF acao = 'DELETE' THEN
        DELETE FROM cidades
        WHERE id = p_id;

    END IF;

END //

DELIMITER ;