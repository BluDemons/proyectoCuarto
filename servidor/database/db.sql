create database scooter;
use scooter;
create table horarios(id int auto_increment not null primary key, hora char(150), precio decimal(3,2));

create table scooters(id int auto_increment not null  primary key, descripcion char(150), estado boolean, codigo char(150));

create table tipo_personas(id int auto_increment not null primary key, tipoPersonaNombre char(150));

create table personas(id int auto_increment not null primary key, nombres char(150), apellidos char(150), direccion char(150), correo char(150), clave char (150), idTipoPersona int, foreign key (idTipoPersona) references tipo_personas(id));


create table detalle_reservas(id int auto_increment not null primary key, descripcion char(150), precio_total decimal (3,2), idpersona int, foreign key (idpersona) references personas(id), idscooter int, foreign key (idscooter) references scooters(id), idhorario int, foreign key (idhorario) references horarios(id));

insert into personas values(1,'admin','admin','El Quinche','admin@gmail.com','1234',1);
insert into tipo_personas values (1,'admin');
insert into tipo_personas values (2,'user');