let pageon=[]

function placeholder(){
    const user= JSON.parse(localStorage.getItem('details'))
    if (user !=null){
        pageon = user;
    }
} 
placeholder();

function SubmitHandler(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    const details = {
        "email": email,
        "password":password,
        "cpassword":cpassword,
    }
    const emailalreadyexist=emailcheck(email)
    if(emailalreadyexist){
        alert("email already exist");
    }
    else if(password != cpassword){
        alert("please check password")
    }
    else{
        pageon.push(details);
        localStorage.setItem("customer_details",JSON.stringify(pageon))
        window.location.href="./../pages/login.html"
    }
 }
 function emailcheck( currentemail){
 let user2=JSON.parse(localStorage.getItem("customer_details"));
 let user3= false;
 
 if(user2){
 for(var i of user2){
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