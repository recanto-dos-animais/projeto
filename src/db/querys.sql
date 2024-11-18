CRIAÇÃO DE TABELAS:
`
  CREATE TABLE IF NOT EXISTS usuarios (
    cod_usuario TEXT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(200) NOT NULL
  );
`
`
  CREATE TABLE IF NOT EXISTS admins (
    cod_admin TEXT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(200) NOT NULL
  );
`
`
  CREATE TABLE IF NOT EXISTS animais (
    cod_animal TEXT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    idade INTEGER,
    sexo VARCHAR(50),
    peso DECIMAL,
    descricao VARCHAR(200),
    status TEXT
  );
`
`
  CREATE TABLE IF NOT EXISTS voluntarios (
    cod_voluntario TEXT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    endereco VARCHAR(100),
    permissao INT NOT NULL,
    data_nascimento DATE,
    data_cadastro DATE,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(200) NOT NULL
  );
`
`
  CREATE TABLE IF NOT EXISTS adocoes (
    cod_adocao TEXT PRIMARY KEY,
    cod_animal TEXT NOT NULL,
    cod_usuario TEXT NOT NULL,
    data_adocao DATE,
    status TEXT,
    FOREIGN KEY (cod_animal) REFERENCES animais(cod_animal) ON DELETE CASCADE,
    FOREIGN KEY (cod_usuario) REFERENCES usuarios(cod_usuario) ON DELETE CASCADE
  );
`
`
  CREATE TABLE IF NOT EXISTS doacoes (
    cod_doacao TEXT PRIMARY KEY,
    cod_usuario TEXT NOT NULL,
    data_doacao DATE,
    valor DECIMAL,
    produto VARCHAR(255),
    FOREIGN KEY (cod_usuario) REFERENCES usuarios(cod_usuario) ON DELETE CASCADE
  );
`

INSERÇÃO DE DADOS:

`INSERT INTO usuarios (cod_usuario, nome, data_nascimento, telefone, email, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
`INSERT INTO admins (cod_admin, nome, telefone, email, senha) VALUES ($1, $2, $3, $4, $5)`;
`INSERT INTO animais (cod_animal, nome, especie, raca, idade, sexo, peso, descricao, status) VALUES ($1, $2 ,$3, $4, $5, $6, $7, $8, $9) RETURNING *`;
`INSERT INTO voluntarios (cod_voluntario, nome, telefone, endereco, permissao, data_nascimento, data_cadastro, email, senha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
`INSERT INTO adocoes (cod_adocao, cod_animal, cod_usuario, data_adocao, status) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
`INSERT INTO doacoes (cod_doacao, cod_usuario, data_doacao, valor, produto) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

EXCLUSÃO DE DADOS:
`DELETE FROM usuarios WHERE cod_usuario = $1`;
`DELETE FROM admins WHERE cod_admin = $1`;
`DELETE FROM animais WHERE cod_animal = $1`;
`DELETE FROM voluntarios WHERE cod_voluntario = $1`;
`DELETE FROM adocoes WHERE cod_adocao = $1`;
`DELETE FROM doacoes WHERE cod_doacao = $1`;

EDIÇÃO DE DADOS:
`UPDATE usuarios SET email = $1 WHERE cod_usuario = $2`;
`UPDATE admins SET email = $1 WHERE cod_admin = $2`;
`UPDATE voluntarios SET email = $1 WHERE cod_voluntario = $2`;
`UPDATE adocoes SET status = $1 WHERE cod_adocao = $2`;
`UPDATE animais SET status = $1 WHERE cod_animal = $2`;
`UPDATE usuarios SET senha = $1 WHERE cod_usuario = $2`;
`UPDATE admins SET senha = $1 WHERE cod_admin = $2`;
`UPDATE voluntarios SET senha = $1 WHERE cod_voluntario = $2`;

SELEÇÃO POR ID:
`SELECT * FROM usuarios WHERE cod_usuario = $1`
`SELECT * FROM admins WHERE cod_admin = $1`
`SELECT * FROM animais WHERE cod_animal = $1`
`SELECT * FROM voluntarios WHERE cod_voluntario = $1`
`SELECT * FROM adocoes WHERE cod_adocao = $1`
`SELECT * FROM doacoes WHERE cod_doacao = $1`

SELECÃO TOTAL:
`SELECT * FROM usuarios`
`SELECT * FROM admins`
`SELECT * FROM animais`
`SELECT * FROM voluntarios`
`SELECT * FROM adocoes`
`SELECT * FROM doacoes`


