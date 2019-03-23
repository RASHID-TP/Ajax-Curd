


$(()=> {

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
    var posting = $.post(url, {
        name: name,
        email: email
    });

    /* Put the results in a div */
    posting.done(function(data) {
      console.log(data);
      
        // var content = $(data).find('#content');
        // $("#result").empty().append(content);
    });
});








  $.get('/allusers', (doc, status, xhr)=> {
        if(doc) {
          //console.log(doc);
          $.each(doc, (key, obj) => {
            // console.log(key)
            // console.log(obj);
            $("#listGroup").append('<li class="list-group-item" ><b>Name: </b>'+ obj.name + ' <br> <b>Email: </b>'+ obj.email +' </li>');
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