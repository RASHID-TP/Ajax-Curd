


$(()=> {

    
      $.get('/allusers', (doc, status, xhr)=> {
        if(doc) {
          //console.log(doc);
          $.each(doc, (key, obj) => {
            console.log(key)
            console.log(obj);
            $("#listGroup").append('<li class="list-group-item" ><b>Name: </b>'+ obj.name + ' <br> <b>Email: </b>'+ obj.email +' </li>');
          })
        }
        //console.log(status + xhr);
      })
    


    $('#addUser').click(()=> {
      let name = $('#name').val();
      let email = $('#email'.val())
        $.ajax({
        url: '/adduser',
        type: 'POST',
        data: {name: name, email: email},
        success: function () {}
    });
    })
})