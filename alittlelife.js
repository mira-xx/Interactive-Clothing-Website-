function moreInfo() {
    const element = document.getElementById("more");
    element.innerHTML = "First published in March 10, 2015 <br> Language: English <br> Literary Awards: Booker Prize Nominess (2015),  Dayton Literary Peace Prize Nominee for Fiction (2016),  National Book Award Finalist for Fiction (2015)";
}

function backHome() {
    window.location.href ="formative.html";
}

var select = document.getElementById("selectNumber");
var options = [1, 2, 3, 4, 5];
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        //creating the options 1-5 drop menu 
        var el = document.createElement("option"); 
        el.textContent = opt;
        el.value = opt;
        //select and show one number 
        select.appendChild(el);
        console.log(select.appendChild(el)); 
        addEventListener("onclick", (multiple) => {
            var t = 10;
            var r = 1;
            if(b>r){
                console.log("inside"); 
                let f = t*b;
                document.getElementById("showingSub").innerHTML = f; 
            } else{
                document.getElementById("showingSub").innerHTML = "$10.00"; 
            
            };
            });

        }
        
// Rating 
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewNew = document.getElementById("review");
const submitButton = document.getElementById("submit");
const reviewsPast = document.getElementById("reviews");

stars.forEach((star) => {
    star.addEventListener("click",() => {
      const numofstars = parseInt(star.getAttribute("data-value"));
      rating.innerText = numofstars;
      stars.forEach((s, index) => {
        //Adding class to each star based on the selected star's value
        if (index < numofstars) {
            s.classList.add(getStarColorClass(numofstars));
        }
    });
    //Adding "selected" class to the clicked star
    star.classList.add("selected");
    });
});

function getStarColorClass(value) {
    switch (value) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        default:
            return "";
    }
}

//Reviews
submitButton.addEventListener("click", () => {
    const review = reviewNew.value;
    const userRating = parseInt(rating.innerText);
    //When no review is typed in
    if (!review){
        alert("Please provide a review before submitting");
        
    } else{  //present the given reviews in the empty div section 
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = 
        `<strong>Rating: ${userRating}/5 </strong> Review: ${review}`;
        reviewsPast.appendChild(reviewElement);
    };
    });
