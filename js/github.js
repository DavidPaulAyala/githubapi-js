var apiKey = require('./../.env').apiKey;

function User(userName){
  this.userName = userName;
}

User.prototype.getRepos = function(cb){
  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response){
    cb(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.userModule = User;
