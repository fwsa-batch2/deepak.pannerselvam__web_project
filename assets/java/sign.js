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
    localStorage.setItem("details", JSON.stringify(pageon))
}