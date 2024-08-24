-- CREATE DATABASE IF NOT EXISTS players2_db;
-- USE players2_db;

DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS biography;
DROP TABLE IF EXISTS club_win;
DROP TABLE IF EXISTS competitions;
DROP TABLE IF EXISTS selection_win;
DROP TABLE IF EXISTS solo_win;
DROP TABLE IF EXISTS solo_trophies;

CREATE TABLE `players`(
	`player_id` INT AUTO_INCREMENT,
    `name` VARCHAR(100),
    `age` INT,
    `country` VARCHAR(100),
    `current_team` VARCHAR(100),
    `img1` VARCHAR(100),
    `img2` VARCHAR(100),
    PRIMARY KEY (`player_id`)
);

CREATE TABLE `biography`(
	`bio_id` INT AUTO_INCREMENT,
	`player_id` INT,
    `bio` longtext,
    PRIMARY KEY (`bio_id`)
);

CREATE TABLE `club_win`(
	`clw_id` INT AUTO_INCREMENT,
	`player_id` INT,
    `comp_id` INT,
    `year` VARCHAR(100),
    `team` VARCHAR(100),
    PRIMARY KEY (`clw_id`)
);

CREATE TABLE `competitions`(
	`comp_id` INT AUTO_INCREMENT,
    `comp_name` VARCHAR(100),
    PRIMARY KEY (`comp_id`)
);

CREATE TABLE `selection_win`(
	`slcw_id` INT AUTO_INCREMENT,
    `player_id` INT,
    `comp_id` INT,
    `year` VARCHAR(100),
    `selection` VARCHAR(100),
    PRIMARY KEY (`slcw_id`)
);

CREATE TABLE `solo_win`(
	`slw_id` INT AUTO_INCREMENT,
    `player_id` INT,
    `trof_id` INT,
    `year` VARCHAR(100),
    PRIMARY KEY (`slw_id`)
);

CREATE TABLE `solo_trophies`(
	`trof_id` INT AUTO_INCREMENT,
    `trof_name` VARCHAR(100),
    PRIMARY KEY (`trof_id`)
);

INSERT INTO `players` (`name`, `age`, `country`, `current_team`, `img1`, `img2`) VALUES
('Lionel Andrés Messi', 37, 'Argentina', 'Inter Miami', 'messi.jpg', 'messi2.jpg'),
('Cristiano Ronaldo', 39, 'Portugal', 'All-Nassr', 'cristiano.jpg', 'cristiano2.jpg');

INSERT INTO `biography` (`player_id`, `bio`) VALUES
(1, 'Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987),
           conocido como Leo Messi, es un futbolista argentino que juega como
           delantero o centrocampista. Desde 2023, integra el plantel del Inter
           Miami de la MLS canadoestadounidense. Es también internacional con la
           selección de Argentina, de la que es capitán. Con el Fútbol Club
           (`Barcelona`),, al que estuvo ligado más de veinte años, ganó 35 títulos,
           entre ellos, diez de La Liga, cuatro de la Liga de Campeones de la
           UEFA y siete de la Copa del Rey. Considerado con frecuencia el mejor
           jugador del mundo y uno de los mejores de todos los tiempos, es el
           único en la historia que ha ganado, entre otras distinciones, ocho
           veces el Balón de Oro, ocho premios de la FIFA al mejor jugador del
           mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de
           Fútbol. En 2020, se convirtió en el primer futbolista y el primer
           argentino en recibir un premio Laureus y fue incluido en el Dream Team
           del Balón de Oro. Tiene, entre otros, los récords por más goles en una
           temporada, en un mismo club y en un año calendario. Es, además,
           el máximo goleador histórico del Barcelona y de la selección
           argentina, de La Liga, la Supercopa de España, la Supercopa de Europa
           y el jugador no europeo con más goles en la Liga de Campeones de la
           UEFA. Nacido y criado en la ciudad de Rosario, a los 13 años se radicó
           en España, donde el Barcelona accedió a pagar el tratamiento de la
           enfermedad hormonal que le habían diagnosticado de niño. Después de
           una rápida progresión por la Academia juvenil del Barcelona, hizo su
           debut oficial con el primer equipo en octubre de 2004, a los
           diecisiete años. A pesar de ser propenso a lesiones en los inicios de
           su carrera, ya en 2006 se estableció como jugador fundamental para el
           club. Su primera temporada ininterrumpida fue la 2008-09, en la que el
           Barcelona alcanzó el primer triplete del fútbol español. Por su estilo
           de juego de pequeño driblador zurdo, pronto se lo comparó con su
           compatriota Diego Maradona quien, en 2007, lo declaró su «sucesor». En
           2009, a los veintidós años, ganó su primer Balón de Oro y el premio al
           Jugador Mundial de la FIFA del año. Siguieron tres temporadas
           exitosas, en las que ganó cuatro Balones de Oro de forma consecutiva,
           hecho que no tenía precedentes. Hasta el momento, su mejor campaña
           personal fue en 2011-12, cuando estableció el récord de más goles en
           una temporada, tanto en La Liga como en otras competiciones europeas.
           Durante las dos siguientes temporadas, también sufrió lesiones y, en
           2014, perdió el Balón de Oro frente a Cristiano Ronaldo, a quien se
           considera su rival. Recuperó su mejor forma durante la campaña
           2014-15, en la que superó los registros de máximo goleador absoluto en
           La Liga y la Liga de Campeones y logró con el Barcelona un histórico
           segundo triplete, además de ganar su quinto Balón de Oro. Volvería a
           ganarlo en 2019, 2021 y 2023. Como internacional argentino, ha
           representado a su país en catorce torneos mayores. A nivel juvenil, en
           2005 participó con la selección sub-20 en el Sudamericano de Colombia
           y ganó la Copa Mundial de Países Bajos, torneo en el que finalizó como
           mejor jugador y máximo goleador y, con la sub-23, recibió la medalla
           de oro en los Juegos Olímpicos de 2008. Después de debutar en la
           selección mayor en agosto de 2005, en el Mundial de Alemania 2006 se
           convirtió en el argentino más joven en jugar y en marcar en un
           mundial. Al año siguiente, en la Copa América, fue nombrado mejor
           jugador joven del torneo. Como capitán desde agosto de 2011, llegó con
           su equipo a las finales del Mundial de Brasil 2014, de la Copa América
           2015 y de la Copa América Centenario, además de ganar la Copa América
           2021 ante Brasil en el Maracaná, la Finalissima frente a Italia en
           Wembley y el Mundial de Catar contra Francia en el estadio Lusail en
           2022 y la Copa América 2024 a Colombia.'),
(2, 'Cristiano Ronaldo dos Santos Aveiro (Funchal, Madeira; 5 de febrero de
           1985) es un futbolista portugués. Juega como extremo izquierdo o
           delantero y su equipo actual es el Al-Nassr F. C. de la Liga
           Profesional Saudí. Es internacional absoluto con la selección de
           Portugal, de la cual es capitán, máximo goleador histórico y jugador
           con más presencias con 212 partidos, logro alcanzado en las
           eliminatorias para la Eurocopa 2024, reconocido por el Libro Guinness
           de los récords. Considerado con frecuencia el mejor y más completo
           futbolista, así como el mayor goleador del mundo, además de uno de los
           mejores de todos los tiempos es uno de los futbolistas más laureados
           de la historia, habiendo ganado, entre otras distinciones, cinco veces
           el Balón de Oro, cinco premios de la FIFA al mejor jugador del mundo y
           cuatro Botas de Oro. Ganador del Premio The Best FIFA de 2016 y Premio
           The Best FIFA de 2016. En 2020, tuvo el honor de ser elegido el mejor
           Jugador del Siglo XXI en la gala de los Globe Soccer Awards
           convirtiéndose en el primer futbolista europeo y el primer portugués
           en recibirlo, además de ser incluido en el Dream Team del Balón de
           Oro. Fue ganador del premio Premio Puskás. Identificado habitualmente
           en los medios de comunicación con el numerónimo CR7, es, con 895
           goles, el máximo goleador en la historia del fútbol profesional y con
           450, el máximo goleador histórico del Real Madriddor lub de Fútbol,
           con 145 y 101 uno de los máximo goleadores del Manchester United
           Football Club, Juventus de Turín. consiguiéndolo en las nueve
           temporadas que jugó en el Real Madrid. Es además, según los portales
           expertos en estadísticas históricas de la RSSSF y la IFFHS, el tercer
           máximo goleador en los campeonatos de Primera División de Europa, con
           498 goles cuarenta y nueve goles más a nivel mundial para un total de
           547 goles, siendo estos datos reconocidos por la UEFA y la FIFA. El
           futbolista ha sido reconocido por la UEFA por sus récords de la
           Eurocopa y Liga de Campeones de la UEFA. Siendo el mejor delantero de
           la temporada 2016-2017, 2017-2018 de la Champions League. A lo largo
           de su carrera profesional, ha conseguido batir diversos récords. Entre
           ellos, se destacan ser el primer jugador que consiguió ganar cuatro
           Botas de Oro, el primer jugador en ganar el Premio Puskás en dos
           ocasiones, ser el segundo futbolista más laureado del Balón de Oro
           (5), ser el primero en ganar el premio The Best FIFA en dos ocasiones,
           ser el jugador que más veces ha ganado el Premio UEFA al Mejor Jugador
           en Europa, con tres títulos, ser el máximo goleador histórico de la
           selección portuguesa (130), el máximo goleador mundial a nivel de
           selecciones (en 2021, ingresando en el Guinness World Records), y ser
           el máximo goleador histórico de la Liga de Campeones (141) contando la
           fase previa, también ser el máximo goleador de la historia de la UEFA,
           el jugador con más partidos (187), más asistencias (42), ha ganado 5
           (UEFA Champions League) siendo uno de los más ganadores de la
           competición, competición en la que también posee las marcas de más
           goles en una edición del torneo 17 goles en 11 partidos (2013-14),
           de más goles en una fase de grupos del torneo 11 goles en seis
           partidos (2015-16) y de más veces máximo goleador del torneo con
           siete ediciones. Es, además, el madridista que menos partidos necesitó
           (92) para alcanzar los cien goles en el campeonato nacional de Liga y
           el jugador que menos partidos necesitó (140) para llegar a 150 goles
           en la historia de la Liga, el primer futbolista en la historia de la
           competición que consiguió marcarle a todos los equipos a los que se
           enfrentó en una temporada, el único futbolista capaz de marcar en seis
           Clásicos consecutivos, o el único en anotar en seis visitas
           consecutivas al Camp Nou, estadio de máxima rivalidad para los
           blancos. Es el jugador de más goles con 7 en Copa Mundial de Clubes de
           la FIFA. Ronaldo comenzó su carrera en el Sporting Club de Portugal,
           equipo en el que obtuvo la Supercopa de Portugal antes de firmar con
           el Manchester United en 2003 a los 18 años, donde se consagró como
           futbolista de élite tras conquistar tres Premier League, dos EFL Cup,
           una FA Cup, dos Community Shield, una Liga de Campeones y una Copa
           Mundial de Clubes, fue galardonado con el Balón de Oro, el Jugador
           Mundial de la FIFA y la Bota de Oro, trofeos que le acreditaban como
           mejor futbolista del mundo a fecha de 2008. Tras protagonizar el
           traspaso más caro en la historia del fútbol en su momento,6 recaló en
           el Real Madrid Club de Fútbol, fue presentado en el Estadio Santiago
           Bernabéu, donde mejoró como futbolista llegando a sus más altos
           registros en juego y goles. En el club español fue el primer jugador
           en superar la histórica cifra de treinta y ocho goles en una temporada
           de Liga, situando la nueva marca en cuarenta goles,registro que le
           sirvió para ganar su segunda Bota de Oro en 2011. Conquistó como
           madridista dos Copas del Rey, dos Ligas, y dos Supercopas de España,
           completando así la triple corona española, más cuatro Ligas de
           Campeones, tres Supercopas de Europa y tres Copas Mundiales de Clubes.
           Sus actuaciones le llevaron a conquistar otros cuatro Balones de Oro
           en 2013, 2014, 2016 y 2017 y otras dos Botas de oro en 2014 y 2015 y a
           situarse entre los tres mejores jugadores del mundo durante ocho
           temporadas. En 2018 fichó por la Juventus en un traspaso por valor
           inicial de 100 millones de euros (88 millones de libras esterlinas),
           el traspaso más caro para un club italiano y el más caro para un
           jugador mayor de 30 años. En el club turinés ganó dos títulos de la
           Serie A, dos Supercopas Italianas y una Copa Italia, obteniendo la
           triple corona italiana, antes de regresar al Manchester United en
           2021. Internacional absoluto con la selección portuguesa desde 2003,
           ha disputado cinco Eurocopas, cinco Mundiales, una Copa
           Confederaciones y dos Ligas de Naciones, en donde sus máximos logros
           fueron la obtención de los títulos en la Eurocopa de 2016 y en la Liga
           de Naciones 2018-19. Siendo el máximo goleador de la Eurocopa 2020 y
           Liga de Naciones de la UEFA 2018-19. En cuanto a la Copa Mundial y a
           la Copa Confederaciones, un cuarto lugar en Alemania 2006 y un tercer
           lugar en Rusia 2017 respectivamente, fueron sus mejores actuaciones.
           Es uno de los jugadores miembro del FIFA Century Club, formado por
           aquellos futbolistas con más de cien internacionalidades con su
           selección. Sus 200 partidos le colocan primero en el listado a fecha de 2023 el que más ha disputado de la historia de Portugal y,
           lógicamente, también primero a nivel UEFA. En 2015, Ronaldo fue
           nombrado el mejor jugador portugués de todos los tiempos por la
           Federación Portuguesa de Fútbol. Es uno de los atletas más famosos y
           comercializables del mundo, así como también una de las figuras más
           mediáticas de su generación. Fue clasificado como el atleta mejor
           pagado del mundo por Forbes en 2016 y 2017, y como el atleta más
           famoso del mundo por ESPN de 2016 a 2019. Time lo incluyó en su lista
           de las 100 personas más influyentes en el mundo en 2014. En 2020,
           obtuvo ingresos por 105 millones de dólares, convirtiéndolo en el
           primer billonario del fútbol. Para el año siguiente, sus ganancias
           fueron de 120 millones de dólares. Desde 2014, es Gran Oficial de la
           Orden del Infante Don Enrique, uno de los máximos reconocimientos
           otorgados en Portugal, por su prestación de servicios relevantes
           otorgados a su país, así como su expansión cultural, histórica y de
           valores. En 2024 la FIFA reconoció al jugador por el récord de 5 goles
           en 5 Copa Mundial de Fútbol.');
           
INSERT INTO `club_win` (`player_id`, `comp_id`, `year`, `team`) VALUES
(1, 2, '2005/06', 'Barcelona'),
(1, 2, '2008/09', 'Barcelona'),
(1, 2, '2010/11', 'Barcelona'),
(1, 2, '2014/15', 'Barcelona'),
(1, 6, '2004/05', 'Barcelona'),
(1, 6, '2005/06', 'Barcelona'),
(1, 6, '2008/09', 'Barcelona'),
(1, 6, '2009/10', 'Barcelona'),
(1, 6, '2010/11', 'Barcelona'),
(1, 6, '2012/13', 'Barcelona'),
(1, 6, '2014/15', 'Barcelona'),
(1, 6, '2015/16', 'Barcelona'),
(1, 6, '2017/18', 'Barcelona'),
(1, 6, '2018/19', 'Barcelona'),
(1, 7, '2008/09', 'Barcelona'),
(1, 7, '2011/12', 'Barcelona'),
(1, 7, '2014/15', 'Barcelona'),
(1, 7, '2015/16', 'Barcelona'),
(1, 7, '2016/17', 'Barcelona'),
(1, 7, '2017/18', 'Barcelona'),
(1, 7, '2020/21', 'Barcelona'),
(1, 4, '2009', 'Barcelona'),
(1, 4, '2011', 'Barcelona'),
(1, 4, '2015', 'Barcelona'),
(1, 5, '2009/10', 'Barcelona'),
(1, 5, '2011/12', 'Barcelona'),
(1, 5, '2015/16', 'Barcelona'),
(1, 8, '2005/06', 'Barcelona'),
(1, 8, '2006/07', 'Barcelona'),
(1, 8, '2009/10', 'Barcelona'),
(1, 8, '2010/11', 'Barcelona'),
(1, 8, '2011/12', 'Barcelona'),
(1, 8, '2013/14', 'Barcelona'),
(1, 8, '2016/17', 'Barcelona'),
(1, 8, '2018/19', 'Barcelona'),
(1, 9, '2021/22', 'Paris Saint Germain'),
(1, 9, '2022/23', 'Paris Saint Germain'),
(1, 10, '2022/23', 'Paris Saint Germain'),
(1, 15, '2023', 'Inter Miami'),
(2, 2, '2007/08', 'Manchester United'),
(2, 2, '2013/14', 'Real Madrid'),
(2, 2, '2015/16', 'Real Madrid'),
(2, 2, '2016/17', 'Real Madrid'),
(2, 2, '2017/18', 'Real Madrid'),
(2, 4, '2009', 'Manchester United'),
(2, 4, '2015', 'Real Madrid'),
(2, 4, '2017', 'Real Madrid'),
(2, 4, '2018', 'Real Madrid'),
(2, 16, '2006/07', 'Manchester United'),
(2, 16, '2007/08', 'Manchester United'),
(2, 16, '2008/09', 'Manchester United'),
(2, 18, '2018/19', 'Juventus'),
(2, 18, '2019/20', 'Juventus'),
(2, 5, '2014/15', 'Real Madrid'),
(2, 5, '2016/17', 'Real Madrid'),
(2, 5, '2017/18', 'Real Madrid'),
(2, 19, '2004', 'Manchester United'),
(2, 7, '2010/11', 'Real Madrid'),
(2, 7, '2013/14', 'Real Madrid'),
(2, 24, '2020/21', 'Juventus'),
(2, 26, '2006', 'Manchester United'),
(2, 26, '2009', 'Manchester United'),
(2, 21, '2018/19', 'Juventus'),
(2, 21, '2020/21', 'Juventus'),
(2, 8, '2012/13', 'Real Madrid'),
(2, 8, '2017/18', 'Real Madrid'),
(2, 20, '2007/08', 'Manchester United'),
(2, 22, '2003', 'Sporting de Lisboa');


INSERT INTO `competitions` (`comp_name`) VALUES
('Copa del Mundo'),
('UEFA Champions League'),
('Eurocopa'),
('Mundial de Clubes'),
('Supercopa de Europa'),
('LaLiga'),
('Copa del Rey'),
('Supercopa de España'),
('Ligue 1'),
('Supercopa de Francia'),
('Copa América'),
('Munidal Sub-20'),
('Finalissima'),
('Medalla de Oro de Juegos Olímpicos'),
('Leagues Cup'),
('Premier League'),
('UEFA Nations League'),
('Serie A'),
('FA Cup'),
('Supercopa de Iglaterra'),
('Supercopa de Italia'),
('Supercopa de Portugal'),
('Copa Italia'),
('Campeonato de Clubes Árabes'),
('Copa de la Liga de Inglaterra');

INSERT INTO selection_win (`player_id`, `comp_id`, `year`, `selection`) VALUES
(2, 3, '2016', 'Portugal'),
(2, 17, '2019', 'Portugal'),
(1, 12, '2005', 'Argentina'),
(1, 14, '2008', 'Argentina'),
(1, 11, '2021', 'Argentina'),
(1, 11, '2024', 'Argentina'),
(1, 13, '2022', 'Argentina'),
(1, 1, '2022', 'Argentina');

INSERT INTO `solo_win` (`player_id`, `trof_id`, `year`) VALUES
(1, 1, '2009'),
(1, 1, '2010'),
(1, 1, '2011'),
(1, 1, '2012'),
(1, 1, '2015'),
(1, 1, '2019'),
(1, 1, '2021'),
(1, 1, '2023'),
(1, 4, '2009'),
(1, 2, '2019'),
(1, 2, '2022'),
(1, 2, '2023'),
(1, 5, '2009/10'),
(1, 5, '2011/12'),
(1, 5, '2012/13'),
(1, 5, '2016/17'),
(1, 5, '2017/18'),
(1, 5, '2018/19'),
(1, 6, '2019'),
(1, 6, '2022'),
(1, 7, '2009/10'),
(1, 7, '2011/12'),
(1, 7, '2012/13'),
(1, 7, '2016/17'),
(1, 7, '2017/18'),
(1, 7, '2018/19'),
(1, 7, '2019/20'),
(1, 7, '2020/21'),
(1, 15, '2008/09'),
(1, 15, '2009/10'),
(1, 15, '2010/11'),
(1, 15, '2011/12'),
(1, 15, '2012/13'),
(1, 15, '2014/15'),
(1, 15, '2016/17'),
(1, 15, '2017/18'),
(1, 15, '2018/19'),
(1, 16, '2008/09'),
(1, 16, '2009/10'),
(1, 16, '2010/11'),
(1, 16, '2011/12'),
(1, 16, '2014/15'),
(1, 16, '2018/19'),
(1, 8, '2007'),
(1, 9, '2006'),
(1, 10, '2014'),
(1, 10, '2022'),
(1, 11, '2010/11'),
(1, 11, '2014/15'),
(1, 12, '2005'),
(1, 13, '2015'),
(1, 13, '2021'),
(1, 14, '2009'),
(1, 14, '2011'),
(1, 14, '2018'),
(1, 14, '2012'),
(2, 2, '2016'),
(2, 2, '2017'),
(2, 1, '2008'),
(2, 1, '2013'),
(2, 1, '2017'),
(2, 1, '2016'),
(2, 1, '2014'),
(2, 11, '2008'),
(2, 11, '2014'),
(2, 11, '2016'),
(2, 11, '2017'),
(2, 3, '2009'),
(2, 14, '2008'),
(2, 14, '2017'),
(2, 7, '2010/11'),
(2, 7, '2013/14'),
(2, 7, '2014/15'),
(2, 17, '2007/08'),
(2, 16, '2007/08'),
(2, 16, '2012/13'),
(2, 16, '2013/14'),
(2, 16, '2014/15'),
(2, 16, '2015/16'),
(2, 16, '2016/17'),
(2, 16, '2017/18'),
(2, 18, '2016'),
(2, 4, '2008'),
(2, 19, '2016'),
(2, 8, '2004'),
(2, 20, NULL);

INSERT INTO `solo_trophies` (`trof_name`) VALUES
("Ballon D'Or"),
("FIFA The Best"),
("Puskás"),
("FIFA World Player"),
("Bota de Oro"),
("Premio Laureus"),
("Pichichi de LaLiga"),
("Trofeo Bravo"),
("FIFA FIFPro"),
("Balon de Oro Mundial"),
("Mejor Jugador  Europa"),
("Golden Boy"),
("MVP Copa América"),
("Onze D'Or"),
("MVP LaLiga"),
("Máximo goleador de la Champions Legaue"),
("Máximo goleador de la Primier"),
("Mejor jugador del Mundial de Clubes"),
("Bota de Oro de Mundial de Clubes"),
("The Best al mejor goleador de todos los tiempos");