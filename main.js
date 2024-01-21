const emailNew = document.getElementById("sub3");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    const email = emailNew.value;
    
    //When no email is typed in
    if (!email){
        alert("Please provide an E-mail before submitting");
    } else {//present the given reviews in the empty div section 
        const x = document.getElementById("sub");
    
        //change the text 
        x.innerHTML = "Thank You for Subscribing!";
        const y = document.getElementById("sub2");
        y.innerHTML = "";
    };
    });
function Link() {
    window.location.href ="alittlelife.html";
}
