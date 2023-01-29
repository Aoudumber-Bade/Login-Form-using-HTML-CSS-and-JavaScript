var x = document.getElementById("login");
var y = document.getElementById("signUp");
var z = document.getElementById("button-f");
var yz = document.getElementById("button-s");
var col = document.querySelector(".form-log");


var forgetBox = document.getElementById("forgot");

forgetBox.style.display="none";


function signUpBtn(){
  x.style.top="-670px";
  y.style.top="-580px";
  z.style.top="-110px";
  yz.style.bottom="-700px";
  forgetBox.style.display="none";

}

function loginBtn(){
  x.style.top="0px";
  y.style.top="509px";
  z.style.top="110px";
  yz.style.bottom="110";
  forgetBox.style.display="none";
  col.style.visibility="visible";
}

function forTabFun(){
  event.preventDefault();

  forgetBox.style.display="initial";
  forgetBox.style.bottom="417px";
  col.style.visibility="hidden";
}


var emailArray=[];
var passwordArray=[];

function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}

function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        window.location='./home.html'
        return ;
    }
  }

  
function forgot(){
  event.preventDefault();

  var email = document.getElementById("fe").value;

  if(emailArray.indexOf(email) == -1){
      if (email == ""){
          alert("Email required.");
          return ;
      }
      alert("Email does not exist.");
      return ;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("fe").value ="";
}
