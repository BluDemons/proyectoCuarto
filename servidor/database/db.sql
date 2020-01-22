create database scooter;
use scooter;
create table tipo_reservas(
id int auto_increment not null primary key,
descripcion char(150),
precio decimal(3,2),
hora time
);

create table scoters(
id int auto_increment not null  primary key,
descripcion char(150),
estado boolean,
codigo char(150)
);

create table tipo_personas(
id int auto_increment not null primary key,
tipo_persona_nombre char(150)
);

create table personas(
id int auto_increment not null primary key,
nombres char(150),
apellidos char(150),
direccion char(150),
password char(150),
email char (150),
id_tipo_persona int, 
foreign key (id_tipo_persona) references tipo_personas(id)
);

create table detalle_reservas(
id int auto_increment not null primary key,
descripccion char(150),
precio_total decimal (3,2),
id_persona int,
foreign key (id_persona) references personas(id),
id_scooter int,
foreign key (id_scooter) references scoters(id),
id_tipo_reserva int,
foreign key (id_tipo_reserva) references tipo_reservas(id)
);
