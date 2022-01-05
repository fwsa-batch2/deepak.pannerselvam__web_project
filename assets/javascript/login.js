let login_page=[]

function placeholder(){
    const user= JSON.parse(localStorage.getItem("login_details"))
    if (user !=null){
        login_page =user;
    }
}

function SubmitHandler(event){
    event.preventDefault();
    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;
  
    
    const details = {
        "email": email,
        "password":password,
    }
    const emailalreadyexist=emailcheck(email)
    if(emailalreadyexist){
        login_page.push(details);
        localStorage.setItem("login_details",JSON.stringify(login_page))
        window.location.href="../index.html"
    }
    else{
       
        alert("error messages");
    }
 }
 function emailcheck( currentemail){
 let user2=JSON.parse(localStorage.getItem("customer_details"));
 let user3= false;
 
 if(user2){
    for( var i of user2) {
     const user=i
     const email=user.email
     if(currentemail == email){
         user3=true;
         break;
     }   
    }
    return user3
}
}
onpageload();