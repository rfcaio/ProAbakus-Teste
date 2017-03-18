<?php

class Helper {
  private $file;

  public function __construct($file) {
    $this->file = $file;
  }

  public function save($text) {
    $f = fopen($this->file, 'a');
    fwrite($f, "$text\n");
    fclose($f);
  }

  public function getUsersArray() {
    $a = array();
    $f = fopen($this->file, 'r');

    while (!feof($f)) {
      array_push($a, fgets($f));
    }
    fclose($f);
    return $a;
  }
}
