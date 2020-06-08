$('#firstbutton').on('click',()=>{
    $('#firstbutton').text('Yeah, you clicked me')

})

$('#secondbutton').on('click',()=>{
    $('#firstbutton').text('Szépen kértem, nem igaz?')

})

let szinek = ['green','red', 'blue']

$('#szinvalto').on('click',()=>{
    $('button').css('background-color','green')

})

