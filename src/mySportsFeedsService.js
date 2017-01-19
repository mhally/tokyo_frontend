$.ajax({
   url: url,
   type: 'GET',
   dataType: 'json',
   async: false,
   headers: {
     Authorization: 'Basic ' + btoa(username + ':' + password)
   },
   success: function(data) {
       console.log(data);
   },
   error : function(request, error)
   {
       console.log('Request: ' + JSON.stringify(request));
       console.log('Error: ' + JSON.stringify(error));
   }
});
