<?php

$params = $_POST;

$f = new Helper('file.txt');
$f->save($params['fname'] . '/' . $params['phone'] . '/' . $params['email']);

echo json_encode($f->getUsersArray());
