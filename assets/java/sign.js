let pageon=[]

function placeholder(){
    const user= JSON.parse(localStorage.getItem('details'))
    if (user){

    }
}

function SubmitHandler(){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    const details = {
        "email": email,
        "password":password,
        "cpassword":cpassword,
    }
    pageon.push(details)
    localStorage.setItem("details", JSON.stringify(pageon));
    let user1 = JSON.parse(localStorage.getItem('details'));
    let user2= user1.length;
    let user3= false;
    for(i=0;i<user2;i++){
        if(email == user1[i].email){
            user3=true;
            break;
        }   
    }
    
    if(user3){
        alert("E-mail already exist");
    }
    else{
alert("Welcome!You have registered successfully.")
    window.location.href="login.html";}
}