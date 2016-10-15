var apiKey = require('./../.env').apiKey;

function User(userName){
  this.userName = userName;
}

User.prototype.getRepos = function(name){
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){);
  console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.userModule = User;
