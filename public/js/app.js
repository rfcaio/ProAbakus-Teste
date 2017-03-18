'use strict';

$(document).ready(function () {
  var data = {};

  function isString(param) {
    return typeof param === 'string';
  }

  function parseToUser(string) {
    var result = {};
    var user   = string.split('/');

    result['fname'] = user[0];
    result['phone'] = user[1];
    result['email'] = user[2].substr(0, user[2].indexOf("\n"));
    return result;
  }

  function render(users) {
    var table = $('<table border="1"></table>');

    users.forEach(function (user) {
      var td = $('<tr></tr>');

      td.append('<td>' + user['fname'] + '</td>');
      td.append('<td>' + user['phone'] + '</td>');
      td.append('<td>' + user['email'] + '</td>');
      table.append(td);
    });

    return table;
  }

  $('#btn-submit').click(function () {
    data.fname = $('#fname').val();
    data.phone = $('#phone').val();
    data.email = $('#email').val();

    $.post('api/', data)
      .done(function (response) {
        var result = JSON.parse(response);
        var users  = [];

        result
          .filter(isString)
          .forEach(function (v) {
            users.push(parseToUser(v));
          });

        $('table').detach();
        $('#users').append(render(users));
      });
  });
});
