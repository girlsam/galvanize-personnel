$(document).ready(function(){
  console.log('sanity check');
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
});
