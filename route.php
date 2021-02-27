<?php
  session_start();
  $url = explode('?', explode('/', $_SERVER['REQUEST_URI'])[1]);

  if (strtolower($url[0]) == ''){
    require 'pages/main.php';
  }
  elseif (strtolower($url[0]) == 'main'){
    require 'pages/main.php';
  }
  elseif (strtolower($url[0]) == 'tour') {
    require 'pages/tour.php';
  }
  elseif (strtolower($url[0]) == 'sightseeing') {
    require 'pages/sightseeing.php';
  }
  elseif (strtolower($url[0]) == 'avia') {
    require 'pages/avia.php';
  }
  elseif (strtolower($url[0]) == 'about') {
    require 'pages/about.php';
  }
  elseif (strtolower($url[0]) == 'message') {
    require 'pages/message.php';
  }
  else {
    require 'pages/main.php';
  }
?>
