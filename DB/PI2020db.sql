--NOMBRE DE LA BASE DE DATOS dbpracticas2020
--GRUPO 4B
create TABLE Usuario(
	Carnet int PRIMARY key not null,
    Nombres varchar(45),
    Apellidos varchar(45),
    contrasena varchar(45),
    correo varchar(45)
);
create table Curso(
    CodigoCurso int PRIMARY KEY not null AUTO_INCREMENT,
    Nombre varchar(45)
);

create table Catedratico(
	NoCatedratico int PRIMARY key not null AUTO_INCREMENT,
    Nombres varchar(45),
    Apellidos varchar(45)
);

create table PensumSistemas(
	idCursoPensum int PRIMARY key not null AUTO_INCREMENT,
    Curso_CodigoCurso int not null,
    Creditos int not null,
    Semestre int not null,
    FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso)
);

CREATE TABLE CursosAprobados(
	CarnetU int not null,
    CursoP int not null,
    NotaAprobada int not null,
    FOREIGN KEY (CarnetU) REFERENCES Usuario(Carnet),
    FOREIGN KEY (CursoP) REFERENCES PensumSistemas(idCursoPensum)
);

create TABLE Curso_Catedratico(
    idCatedraticoCurso int PRIMARY KEY AUTO_INCREMENT not null,
    Curso_CodigoCurso int not null,
    Catedratico_NoCatedratico int not null,
    FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso),
    FOREIGN KEY (Catedratico_NoCatedratico) REFERENCES Catedratico(NoCatedratico)
);

create TABLE Publicacion(
	idPublicacion int PRIMARY KEY AUTO_INCREMENT not null,
    Mensaje varchar(100),
    Usuario_Carnet int not null,
    Fecha date,
    Curso_Catedratico_idCatedraticoCurso int,
    Curso_CodigoCurso int,
    Catedratico_NoCatedratico int,
    Tipo int,
    FOREIGN key (Usuario_Carnet) REFERENCES Usuario(Carnet),
    FOREIGN KEY (Curso_Catedratico_idCatedraticoCurso) REFERENCES Curso_Catedratico(idCatedraticoCurso),
    FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso),
    FOREIGN KEY (Catedratico_NoCatedratico) REFERENCES Catedratico(NoCatedratico)
);

CREATE TABLE Comentario(
	idComentario int not null PRIMARY KEY AUTO_INCREMENT,
    Mensaje varchar(100) not null,
    Publicacion_idPublicacion int not null,
    Usuario_Carnet int not null,
    FOREIGN KEY (Publicacion_idPublicacion) REFERENCES Publicacion(idPublicacion),
    FOREIGN key (Usuario_Carnet) REFERENCES Usuario(Carnet)
);