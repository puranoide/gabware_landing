-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-04-2025 a las 23:54:50
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gabware_blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Post`
--

CREATE TABLE `Post` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text DEFAULT NULL,
  `link_img` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `enlace` varchar(510) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Post`
--

INSERT INTO `Post` (`id`, `titulo`, `contenido`, `link_img`, `idUser`, `enlace`) VALUES
(1, 'prueba front', 'prueba prueba prueba prueba', 'https://i.imgur.com/Gl1Ftaw.jpeg', NULL, 'www.youtube.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `completename` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(510) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `completename`, `email`, `password`) VALUES
(1, 'angel gabriel acosta sanchez', 'acostasanchezangelgabriel@gmail.com', 'Perogame1@');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `useridFK` (`idUser`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Post`
--
ALTER TABLE `Post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `useridFK` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
