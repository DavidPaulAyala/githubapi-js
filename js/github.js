var apiKey = require('./../.env').apiKey;
function User(username){
  this.username = username;
};

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repository) {
      $(".showRepos").append(repository.name + "<br>" + repository.description + "<br>" + "<br>");
    });
  }).fail(function(error) {
    alert(error.responseJSON.message);
  });
};

exports.userModule = User;
