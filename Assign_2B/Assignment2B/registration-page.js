function register() {
    let name = $("#fullname").val();
    let username = $("#username").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let dob = $("#dob").val();
    let gender = $("#gender-radio-container input:radio[name=gender]:checked").val();
    let address = $("#address").val();
    let state = $("#state").find(":selected").text();
    let city = $("#city").find(":selected").text();
    let pincode = $("#pincode").val();

    let checkboxes = document.querySelectorAll('#hobbies-check-container input[type=checkbox]:checked');
    let hobbies = [];

    for(var i = 0; i < checkboxes.length; i++) {
        hobbies.push(checkboxes[i].value);
    }
    let password = $("#password").val();

    let button = document.getElementById("register-btn");

    let isValid = true;
    button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Password should be at least 4 characters
        if (password.length < 4) {
            isValid = false;
            alert("Password should be at least 4 characters");
        }

        // Email should contain '@'
        if (!email.includes('@')) {
            isValid = false;
            alert("Please enter a valid email address");
        }

        // Date of Birth should not be more than 2004
        if (dob.getFullYear() > 2004) {
            isValid = false;
            alert("Date of Birth should not be more than 2004");
        }

        // Pincode should have exactly 6 digits
        if (!/^\d{6}$/.test(pincode)) {
            isValid = false;
            alert("Pincode should have exactly 6 digits");
        }
    })

    if(isValid) {
        let userData = {
            name: name,
            username: username,
            mobile: mobile,
            email: email,
            dob: dob,
            gender: gender,
            address: address,
            state: state,
            city: city,
            pincode: pincode,
            hobbies: hobbies,
            password: password
        }

        console.log(JSON.stringify(userData));
        displayData(userData);
    }
}

function displayData(userData) {
    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts', // Using JSONPlaceholder for testing
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: function(response) {
            // Redirect to a new page and display the response
            window.location.href = 'user-data.html?data=' + JSON.stringify(response);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}