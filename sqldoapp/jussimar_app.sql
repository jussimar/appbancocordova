-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 16/05/2018 às 17:17
-- Versão do servidor: 5.5.57-0ubuntu0.14.04.1
-- Versão do PHP: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `jussimar_app`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoa`
--

CREATE TABLE IF NOT EXISTS `pessoa` (
  `cd_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `nm_pessoa` varchar(100) NOT NULL,
  `nr_cpf` varchar(20) NOT NULL,
  PRIMARY KEY (`cd_pessoa`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=52 ;

--
-- Fazendo dump de dados para tabela `pessoa`
--

INSERT INTO `pessoa` (`cd_pessoa`, `nm_pessoa`, `nr_cpf`) VALUES
(46, 'Jussa teste', '123455'),
(8, 'Jussa', '123456789'),
(39, 'Carlos Eduardo ', '666'),
(45, 'Luciano', '38383737737'),
(15, 'mari', '123456789'),
(16, 'angela', '212454554'),
(20, 'Gabriel', '1234652121'),
(21, 'Samuel ', 'undefined'),
(26, 'Marcos ', '515161'),
(41, 'Kelvin ', '6667'),
(25, 'Nagila', '56578900988777'),
(30, 'Nagila', '1635281910373'),
(31, 'Nagila oiii', '1635281910373'),
(40, 'Kelvin ', '6667'),
(35, 'Agusha', '4756657'),
(42, 'Mikael', '40028922'),
(43, 'Henrique', '47435541877'),
(47, 'Jusssaaass', '000000'),
(48, 'teste monga', '54545454'),
(49, 'testeeeeeeeeeeeee', '218555555'),
(50, 'testeeeeeeeeeeeee', '218555555'),
(51, 'testeeeeeeeeeeeee', '218555555');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
