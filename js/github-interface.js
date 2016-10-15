var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $('#findUser').click(function(){
    event.preventDefault();
    var name = $('#user').val();
    var inputtedUser = new User();
    inputtedUser.getRepos(name);
  });
});
