var mealPlan = document.getElementById("mealPlan");

mealPlan.addEventListener("click", ValidateName);
mealPlan.addEventListener("click", ValidateEmail);
mealPlan.addEventListener("click", ValidateGoal);


function ValidateName(){
    var name= document.getElementById("firstName").value;
    if(name == ""){
        window.alert("Name must be filled out");
        return false;
    }
}

function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email= document.getElementById("email").value;
if(email.match(mailformat))
{
     return true;
}
else
{
window.alert("You have entered an invalid email address!");
}
}

function ValidateGoal(){
    var goal = document.getElementsByName("goal");
    var isChecked = false;

    for (var i = 0; i < goal.length; i++) {
        if (goal[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (isChecked) {
        return true;
    } else {
        alert('Please select a goal!');
    }
}
