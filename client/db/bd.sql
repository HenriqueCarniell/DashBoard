-- Active: 1699613985739@@127.0.0.1@3306@dashboard

show databases;

show tables;

drop Table Produto;

create table Produto (
    idProduto int PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(30) NOT NULL,
    Descricao VARCHAR(100),
    Categoria ENUM('Eletrônicos', 'Moda', 'Casa e Jardim', 'Saúde e Beleza',
    'Esportes e Fitness', 'Brinquedos e Jogos', 'Alimentos e Bebidas',
    'Livros e Música', 'Automotivo', 'Pet Shop'),
    
    Localização_Na_Pagina ENUM('Carrossel de Destaques', 'Barra Lateral de Navegação', 'Seção de Ofertas Especiais', 
    'Seção Mais Vendidos', 'Seção de Novos Lançamentos', 'Rodapé', 'Pop-up de Notícias', 'Seção Escolha do Editor', 
    'Barra de Pesquisa', 'Seção Recomendado Para Você'),
    preco float(10,2),
    preco_Promocional FLOAT(10,2),
    Tag VARCHAR(10)
);

select * from produto;

delete from produto;