<?php
  $url = explode('/', $_SERVER['REQUEST_URI']);

  if (strtolower($url[1]) == 'main'){
    require 'pages/main.php';
  }
  elseif (strtolower($url[1]) == 'tour') {
    require 'pages/tour.php';
  }
  elseif (strtolower($url[1]) == 'sightseeing') {
    require 'pages/sightseeing.php';
  }
  elseif (strtolower($url[1]) == 'avia') {
    require 'pages/avia.php';
  }
  elseif (strtolower($url[1]) == 'about') {
    require 'pages/about.php';
  }
  elseif (strtolower($url[1]) == 'massage') {
    require 'pages/massage.php';
  }
  else {
    require 'pages/main.php';
  }
?>
