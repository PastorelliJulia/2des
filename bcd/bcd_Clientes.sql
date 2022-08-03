drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- DDl Criação da estrutura de banco de dados
-- cd \     cd xampp       cd mysql    cd bin      mysql -u root  
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null, 
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);
create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null,
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

insert into clientes values
(null, "Jorge", "Silva", "Rua Coisa Bueno - Jaguariuna -Sp"),
(null, "Vanessa", "Silva", "Rua Amancio Bueno - Jaguariuna -Sp"),
(null, "Jorge", "Souza", "Rua Dois - Pedreira -Sp"),
(null, "Jorge", "Tavares", "Rua Bueno Bueno - Jaguariuna -Sp");

insert into telefones values
(1, "(19)98363-8959"),
(1, "(19)98363-8959"),
(2, "(11)98363-8959"),
(3, "(20)98363-8959");

insert into pedidos values
(null,1,null,100,"Camiseta",2),
(null,1,null,30,"Meia",5),
(null,1,null,250,"Moletom",2),
(null,1,null,150,"Bermuda",2);

select * from clientes;
select * from telefones;
select * from pedidos;

