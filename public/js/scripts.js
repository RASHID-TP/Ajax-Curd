
$(()=> {

    $('#alertDiv').hide();

   /* attach a submit handler to the form */
   $("#addUserForm").submit(function(event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    let $form = $(this)
    let name = $('#name').val()
    let email = $('#email').val()
    let url = $form.attr('action');

    /* Send the data using post */
    $.post(url, {
        name: name,
        email: email
    }, (data, status, xhr)=> {
      console.log(xhr);
      if(status == "success"){
        console.log(data);
        console.log(status);
        $("#listGroup").prepend('<li class="list-group-item" >Name: <b>'+ data.name + '</b> <br> Email: <b>'+ data.email +'</b> </li>');
        // Reset form input after successfull submission
        $('#addUserForm').each(function(){
          this.reset();
          $('#alertDiv').show().text('User '+ data.name +' added successfully!').fadeOut(8000)
      });

      }

    });


  });




  $.get('/allusers', (doc, status, xhr)=> {
        if(doc) {
          //console.log(doc);
          $.each(doc, (key, obj) => {
            // console.log(key)
            // console.log(obj);
            $("#listGroup").prepend('<li class="list-group-item" >Name : <b>'+ obj.name + '</b> <br> Email : <b>'+ obj.email +'</b> </li>');
          })
        }
        //console.log(status + xhr);
      })
    

    // $('#addUser').click(()=> {
    //   let name = $('#name').val();
    //   let email = $('#email'.val())
    //     $.ajax({
    //     url: '/adduser',
    //     type: 'POST',
    //     data: {name: name, email: email},
    //     success: function () {}
    // });
    // })

})