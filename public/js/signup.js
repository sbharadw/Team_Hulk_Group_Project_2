  const signUpForm = $("#signup");
  console.log(signUpForm);

// When the signup button is clicked, we validate the email and password are not blank
signUpForm.on("click", event => {

// Getting references to our form and input

event.preventDefault();

// console.log("Click working")

const emailInput = $("#email-input").val().trim();
  // console.log(emailInput);

const passwordInput = $("#password-input").val().trim();
  // console.log(passwordInput);

const passwordConfirm = $("#confirm-password").val().trim();
  // console.log(passwordConfirm);

const firstName = $("#first-name").val().trim();
  // console.log(firstName);

const lastName = $("#last-name").val().trim();
  // console.log(lastName);

const cellNum = $("#cellNum").val().trim();
  // console.log(cellNum);

const zip = $("#zip").val().trim();
  // console.log(zip);

const address = $("#address").val().trim();
  // console.log(address);

const city = $("#city").val().trim();
  // console.log(city);

const state = $("#state").val().trim();
  // console.log(state);

  const userData = {
    email: emailInput,
    password: passwordInput,
    firstName: firstName,
    lastName: lastName,
    cellNum: cellNum,
    zip: zip,
    address: address,
    city: city,
    state: state,
  };

  console.log(userData);


  if (!userData.email || !userData.password) {
  //console.log('no email / password')
    return;
  }
  if(passwordInput != passwordConfirm){
  // console.log('password error');
    return;
  }
  // If we have an email and password, run the signUpUser function
  signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.cellNum, userData.zip, userData.address, userData.city, userData.state);

});

// Does a post to the signup route. If successful, we are redirected to the members page
// Otherwise we log any errors
function signUpUser(email, password, firstName, lastName, cellNum, zip, address, city, state) {

  console.log("step one")


  $.post("/api/users", {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    cell_number: cellNum,
    zipcode: zip,
    address: address,
    city: city,
    state: state,
  })
    .then((res) => {

      console.log(res)
      console.log("last step")
      // window.location.href = ("/homepage");
      // If there's an error, handle it by throwing up a bootstrap alert
  })
}
/* 

Login script start------------------------------------------------------
------------------------------------------------------------------------

*/


const login = $("#login");

// When the form is submitted, we validate there's an email and password entered
login.on("click", event => {

  event.preventDefault();

  const emailLog = $("#email");
  const passwordLog = $("#password");

  let email =  emailLog.val().trim();
  console.log(email);

  let password = passwordLog.val().trim();
  console.log(password)

  const loginData = {
    email: email,
    password: password
  };

  console.log(loginData.email + "    " + loginData.password);

  if (!loginData.email || !login.password) {
    console.log("ISSUE")
    // return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(loginData.email, loginData.password);


// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {

  console.log("LOGIN USER FUNCTION CALLED")

  $.post("/api/login", {
    email: email,
    password: password
  })
    .then(() => {
      console.log("Working")
      window.location.href = ("/homepage");
    })
    .catch(err => {
      console.log(err);
    });
}
});
