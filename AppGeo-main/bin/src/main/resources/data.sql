--Add initial role
INSERT INTO ROLE (ROLE_NAME) VALUES ('ROLE_USER');
INSERT INTO ROLE (ROLE_NAME) VALUES ('ROLE_ADMIN');

INSERT INTO PERSONA(`id`, `about_me`, `back_image`, `date_of_birth`, `full_name`, `image`, `mail`, `position`, `ubication`) 
VALUES (1,"Matemático, físico e informático argentino considerado por muchos como el padre de la computación en la Argentina.", 
"https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-black-shading-red-shard-geometry-banner-background-shadingred-debrisred-glowgeometry-image_80184.jpg",
"15/03/1980", "Manuel Sadosky", "https://i2.wp.com/imagenes.milenio.com/E-yJnq9EhkZhWaU7T_2utkyTymQ=/958x596/smart/https://www.milenio.com/uploads/media/2018/10/05/steve-jobs-perdio-vida-consecuencia_0_199_1193_742.jpg?w=640&ssl=1",
"manuel@gmail.com", "informático","Buenos Aires (Argentina) ");

--Education
INSERT INTO EDUCATION (`id`, `id_persona`, `school`, `career`, `img`, `title`, `score`, `start`, `end`) 
VALUES (1,1,"UTN","Ingeniería","https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg","Sistemas Computacionales","0","2019","2028");

INSERT INTO EDUCATION (`id`, `id_persona`, `school`, `career`, `img`, `title`, `score`, `start`, `end`)
VALUES (2,1,"Centro de Enseñanza Técnica Industrial","Tecnologo","https://media-exp1.licdn.com/dms/image/C560BAQEUHhax7RCj0A/company-logo_100_100/0/1584819716706?e=1637798400&v=beta&t=4UkXYz39PCtn4PqDYbwXZNWPSC3MgoHckfDfqQLBlHc",
"Desarrollo de Software","82","2014","2018");

INSERT INTO EDUCATION (`id`, `id_persona`, `school`, `career`, `img`, `title`, `score`, `start`, `end`) 
VALUES (3,1,"Escuela Secundaria Técnica 14","Técnico","https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154?e=1637798400&v=beta&t=gyinTA0GPG1xIBDPj01L33mQHcdOdyMOdpoRHY640Pc",
"Electronica, comunicacion y sistemas de control","0","2012","2014");

--Experience
INSERT INTO EXPERIENCE(`id`, `id_persona`, `place`, `company`, `end`, `img`, `mode`, `position`, `start`, `time_elapsed`) 
VALUES (1 ,1 , "Buenos Aires, Argentina","CONICET","actualidad",
"https://es.wikipedia.org/wiki/Consejo_Nacional_de_Investigaciones_Cient%C3%ADficas_y_T%C3%A9cnicas_(Argentina)#/media/Archivo:Conicet_Logo_con_letras.png",
"Free Lance", "Backend Developer", "mar 2019", "2 años y 6 meses");

INSERT INTO EXPERIENCE(`id`, `id_persona`, `place`, `company`, `end`, `img`, `mode`, `position`, `start`, `time_elapsed`) 
VALUES (2 ,1 , "1200 Park Ave emeryville, ca, USA","Pixar","actualidad",
"https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154?e=1637798400&v=beta&t=gyinTA0GPG1xIBDPj01L33mQHcdOdyMOdpoRHY640Pc",
"Jornada parcial", "Backend Developer", "mar 2019", "2 años y 6 meses");

INSERT INTO EXPERIENCE(`id`, `id_persona`, `place`, `company`, `end`, `img`, `mode`, `position`, `start`, `time_elapsed`) 
VALUES (3 ,1 , "1200 Park Ave emeryville, ca, USA","Mercado Libre","actualidad",
"https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154?e=1637798400&v=beta&t=gyinTA0GPG1xIBDPj01L33mQHcdOdyMOdpoRHY640Pc",
"Jornada parcial", "Backend Developer", "mar 2019", "2 años y 6 meses");
