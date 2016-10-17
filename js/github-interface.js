var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("#findUser").submit(function(event){
    event.preventDefault();

    $(".showRepos").empty();
    var username = $("#user").val();
    var newUser = new User(username);
    newUser.getRepos(newUser.username);
  });
});
