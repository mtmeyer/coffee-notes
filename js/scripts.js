$(document).ready(function(){

   $.ajax({
            url: "https://boiling-meadow-43049.herokuapp.com/notes",
            type: 'GET',
            dataType: 'application/json',
            success: function(res) {
               $('#notes').html(res)
            }
        });

})
