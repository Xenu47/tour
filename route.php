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
  else {
    require 'pages/blank.php';
  }
?>
