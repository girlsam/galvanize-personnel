$(document).ready(function(){
  $.ajax({
    url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    method: 'GET'
  }).done(function(data){
    for (i = 0; i < data.length; i++) {
      var titleVal = data[i].title;
      $('select').append('<option value=' + titleVal + '>' + titleVal + '</option>');
      }
      $('select').change(function() {
        data.forEach(function(role) {
        if (role.title === $('#role').val()) {
          $('img').attr('src','.' + role.img);
          }
        });
      });
    });
  $('button').on('click', function(event) {
    event.preventDefault();
    var fName = $('#firstName').val();
    var lName = $('#lastName').val();
    var selectedRole = $('#role').val();
    $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/users',
      method: 'POST',
      data: {firstName: fName, lastName: lName, role: selectedRole}
    }).done(function(results) {
      var successMessage = results.message;
      $('.save-status').fadeOut(0);
      $('.save-status').append('<p class="alert alert-dismissible alert-success">' + successMessage + '</p>');
      $('.save-status').fadeIn(500).delay(2000).fadeOut(500);
    }).fail(function(error) {
      var failMessage = error.responseJSON.message;
      $('.save-status').fadeOut(0);
      $('.save-status').append('<p class="alert alert-dismissible alert-danger">' + failMessage + '</p>');
      $('.save-status').fadeIn(500, function() {
        $(this).delay(2000).fadeOut(500);
      });
    });
  });
});
