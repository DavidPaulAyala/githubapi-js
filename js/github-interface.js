var apiKey = require('./../.env').apiKey;

(document).ready(function() {
  $('#findUser').click(function() {
    var userName = $('#user').val();
    $('#user').val("");
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
      $('.showRepos').text("The repsitories for " + userName + " are " + response.main.public_repos + "%");
    }).fail(function(error) {
      $('.showRepos').text(error.responseJSON.message);
    });
  });
});
