$(document).ready(function() {
    // Login Form
    //ids classes can change
    var loginForm = $("button#login");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
  
    // When click , validate email and password
    loginForm.on("click", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // CLEAR
      userLogin(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // userLogin does a post request "api/login" route
    function userLogin(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("./orderform");
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  });