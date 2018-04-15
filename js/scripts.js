$(document).ready(function(){

   $.get("https://boiling-meadow-43049.herokuapp.com/notes", function(data, status) {
     alert("Data: " + data + "\nStatus: " + status);
   });
})
