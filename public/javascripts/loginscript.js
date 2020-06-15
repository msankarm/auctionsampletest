
function Login() {
  var myForm = document.getElementById("loginform");
var uname=myForm.elements.namedItem('login').value
var paswd=document.getElementById('password').value
let en=CryptoJS.MD5(paswd)
    $.ajax({type: 'POST',data:{
      username:uname,
      password:paswd ,
    },url: "/login", crossDomain: true, success: function(result){
      if(result=='Success'){
        window.location.replace("http://localhost:5000/listview")
      }else{
        document.getElementById("errmsg").innerHTML = result
      }
        
      }});
}