//step -1: add eventhandler on the submit button

document.getElementById('submit-btn').addEventListener('click',function(){
    //step -2: get the email address inside the email input field and password input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passField = document.getElementById('user-password');
    const password = passField.value;

    // DO NOT VARIFY password on the client side

    // step -3: varify email and password 

    if ((email === 'naeem@gmail.com' || email === 'nobeen@gmail.com' || email === 'nusrat@gmail.com') && (password === 'lemmein')){
        window.location.href = 'bank.html';
    }
    else {
        alert('We dont know you lil bro');
    }
    emailField.value='';
    passField.value='';
    
});