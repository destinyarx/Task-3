var retrieveUsername = localStorage.getItem("user-login");
    getUser = JSON.parse(retrieveUsername);
    

    var retrieveUserDetails = localStorage.getItem(getUser);
    getCurrentUserLogin = JSON.parse(retrieveUserDetails);


    console.log("\nUsername: " + getCurrentUserLogin.username + "\nFullname: " + getCurrentUserLogin.fullname 
    + "\nAddress: " + getCurrentUserLogin.address + "\nEmail: " + getCurrentUserLogin.email
    + "\nContact: " + getCurrentUserLogin.contact + "\nGender: " + getCurrentUserLogin.gender
    + "\nAge: " + getCurrentUserLogin.age);

    displayUsername = String(getCurrentUserLogin.username);
    displayFullname = String(getCurrentUserLogin.fullname);
    displayAddress = String(getCurrentUserLogin.address);
    displayEmail = String(getCurrentUserLogin.email);
    displayContact = String(getCurrentUserLogin.contact);
    displayGender = String(getCurrentUserLogin.gender);
    displayAge = String(getCurrentUserLogin.age);



    $("#display-username").val(displayUsername);
    $("#display-fullname").val( displayFullname);
    $("#display-address").val(displayAddress);
    $("#display-email").val( displayEmail);
    $("#display-contact").val(displayContact);
    $("#display-gender").val(displayGender);
    $("#display-age").val(displayAge);