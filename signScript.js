
var email = document.forms['form']['Email'];
var ps = document.forms['form']['Password'];

var emailErr = document.getElementById('errEmail')
var psErr = document.getElementById('errPs')

var valid =()=>{
    if(email.value.length < 10 ){
        email.style.cssText="border: 2px solid red";
        email.focus();
        emailErr.style.cssText="display:block";
        return false;
    }

    if(ps.value.length< 8){
        ps.style.cssText="border: 2px solid red";
        ps.focus();
        psErr.style.cssText="display:block";
        return false;
    }
}

// var Btn = document.getElementById('signBtn')
// Btn.addEventListener('submit',fun(e))
//  var fun = () =>{

//  }

var pop = document.getElementById('popup')

oPopup = ()=>{
    oPopup.classList.add("openPopup")

}