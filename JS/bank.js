document.getElementById('Login-submit').addEventListener('click', function () {
    
    ///get User Email///
    const emailField = document.getElementById('User-Email');
    const userEmail = emailField.value;
    console.log(userEmail);


    ///get User password////
    const passwordField = document.getElementById('User-Password');
    const userPassword = passwordField.value;
    console.log(userPassword);
   
    ///Check Email and Password///
     
    if(userEmail == 'bappy@gmail.com' && userPassword == '12345'){
        window.location.href = "banking.html"
    }

})
