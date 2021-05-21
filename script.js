function infoCheck() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var pass1 = document.getElementById('pass1').value;
  var pass2 = document.getElementById('pass2').value;

  var atcheck = email.split("@")
  var dotcheck = email.split(".")

  if (fname.length != 0) {
    document.getElementById('fname').classList.remove("wrongin")
    document.getElementById('wrongfname').innerHTML = "";
    if (lname.length != 0) {
      document.getElementById('lname').classList.remove("wrongin")
      document.getElementById('wronglname').innerHTML = "";
      if (email.length != 0) {
        if (email != atcheck && atcheck.length == 2) {
          if (email != dotcheck && dotcheck.length == 2) {
            document.getElementById('email').classList.remove("wrongin")
            document.getElementById('wrongemail').innerHTML = "";
            if (pass1 == pass2) {
              if (pass1.length >= 6) {
                document.getElementById('pass1').classList.remove("wrongin")
                document.getElementById('pass2').classList.remove("wrongin")

                document.getElementById('wrongpass1').innerHTML = "";
                document.getElementById('wrongpass2').innerHTML = "";

                confirm("Email Registered Succesfully")
              }
              else {
                document.getElementById('wrongpass2').innerHTML = "*Password should be atleast 6 characters long";
                document.getElementById('pass1').classList.add("wrongin")
                document.getElementById('pass2').classList.add("wrongin")
              }
            }
            else {
              document.getElementById('pass1').classList.add("wrongin")
              document.getElementById('pass2').classList.add("wrongin")
              document.getElementById('wrongpass2').innerHTML = "*Passwords not matching";
            }
          }
          else {
            document.getElementById('email').classList.add("wrongin")
            document.getElementById('wrongemail').innerHTML = "*Shall be a valid Address";
          }
        }
        else {
          document.getElementById('email').classList.add("wrongin")
          document.getElementById('wrongemail').innerHTML = "*Shall be a valid Address";
        }
      }
      else {
        document.getElementById('email').classList.add("wrongin")
        document.getElementById('wrongemail').innerHTML = "*Mandatory Feild";
      }
    }
    else {
      document.getElementById('lname').classList.add("wrongin")
      document.getElementById('wronglname').innerHTML = "*Mandatory Feild";
    }
  }
  else {
    document.getElementById('fname').classList.add("wrongin")
    document.getElementById('wrongfname').innerHTML = "*Mandatory Feild";
  }
}
