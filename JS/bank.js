document.getElementById('Login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('User-Email');
    const userEmail = emailField.value;
    console.log(userEmail);


    ///get User password////
    const passwordField = document.getElementById('User-Password');
    const userPassword = passwordField.value;
    console.log(userEmail);

})
