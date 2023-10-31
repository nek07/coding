$(document).ready(function () {
    $("#username, #password, #confirmPassword").on("input", function () {
        validateInputs();
    });

    $("#registerButton").click(function () {
        if (validateInputs()) {
          const $span = $("<span></span>");
          $span.text("Successfully Registered!");
          $("body").append($span);
          
        }
    });

    function validateInputs() {
        var username = $("#username").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        var usernameError = $("#usernameError");
        var passwordError = $("#passwordError");
        var confirmPasswordError = $("#confirmPasswordError");

        var isValid = true;

        if (username === "") {
            usernameError.text("Username is required");
            isValid = false;
        } else {
            usernameError.text("");
        }

        if (password  === "") {
            passwordError.text("Password is required");
            isValid = false;
        } else {
            passwordError.text("");
        }

        if (confirmPassword === "") {
            confirmPasswordError.text("Confirm Password is required");
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.text("Passwords do not match");
            isValid = false;
        } else {
            confirmPasswordError.text("");
        }

        if (isValid) {
            $("#registerButton").prop("disabled", false);
        } else {
            $("#registerButton").prop("disabled", true);
        }

        return isValid;
    }
});