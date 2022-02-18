// send data to server
const submitComment=(comment)=>{
    $.ajax({
        url: '/api/comments',
        contentType: 'application/json',
        data: JSON.stringify(comment),
        type: 'POST',
        success: function(result) {
            alert('Comment added successfully')
        }
    });
}

// add new comment to the server
const newComment=()=>{
    let name = $('#name').val()
    let description = $('#description').val()

    let comment={name,description}

    console.log(comment)
    submitComment(comment)
}

// get comments from the server
const requestComments=()=>{
    $.get('/api/comments',(comments)=>{
        if(comments.length>0){
            console.log(comments)
            listComments(comments)
        }
    })
}

//connect to socket
let socket = io();

socket.on('number',(msg) => {
    console.log('Random number: '+msg);
    $('#socketOut').html(msg)
})

//appends the comment row with the objects of type comment
listComments=(comments)=>{
    comments.forEach(comment => {
        console.log(comment)
        let item ='<div class="card">'+
        '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+comment.name+'</span>'+
        '</div>'+
        '<div class="card-reveal">'+
        '<p>'+comment.description+'</p>'+
     '</div>'+
     '</div>'          
    
    $('#listComments').append(item)
    });
}

// INITIALIZATION 
const dummyComment={
    name:'priyanka',
    description:'This is a great example for personal portfolio'
}

let dummyData=[dummyComment,dummyComment]

$(document).ready(function(){
    console.log('Ready')
  
    // get data and build the ui component
    listComments(dummyData)
  
    requestComments()

  })
