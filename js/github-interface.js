var User = require('./../js/github.js').userModule;

function displayRepos(response){
  $('.showRepos').text("");
  response.forEach(function(repo){
    $('.showRepos').append("<li>" + repo.name + " : " + repo.description + "</li>");
  });
}


$(document).ready(function() {
  $('#findUser').submit(function(event){
    event.preventDefault();
    var userName = $('#user').val();
    var inputtedUser = new User(userName);
    inputtedUser.getRepos(displayRepos);
  });
});
