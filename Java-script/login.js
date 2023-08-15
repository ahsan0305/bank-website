// step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button')
    // step:2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    // set:3 get password
    // 1.set id on the html element
    // 2. get the element
    // 3 get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password); 

    // Danger ---> DO NOT VERIFY EMAIL & PASSWORD ON THE CLIENT SITE
    // step:4 verify email and password and check whether valid user or not
    if(email === 'baper@pola.com' && password === 'please'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user');
    }
})
