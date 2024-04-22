
//define Global variable
var mealPlan = document.getElementById("mealPlan");
var personalInfoform = document.getElementById("personalInfoForm");



//Add event listeners to validate and create meal plan
mealPlan.addEventListener("click", ValidateName);
mealPlan.addEventListener("click", ValidateEmail);
mealPlan.addEventListener("click", ValidateGoal);
mealPlan.addEventListener("click", createMealPlan);




//functions to validate feilds
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
    var validEmail = true;
    window.validEmail2 =validEmail;
     return validEmail2;
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


//Function to create unique meal plans

function createMealPlan(){

    //define miscillenous local vairable
    var name= document.getElementById("firstName").value;
    var cssLink = '<link rel="stylesheet" href="finalProject.css">';
    var newHeaderLW = "<h1>Hello, " + name  + " this is your meal plan for losing weight!</h1>";
    var newHeaderGM = "<h1>Hello, " + name  + " this is your meal plan for gaining muscle</h1>";
    var newHeaderFM = "<h1>Hello, " + name  + " this is your meal plan for feeding microbiome</h1>";
    var clearFormButton ="</br></br><button id='clearForm'>Clear Form</button>"
    var printFormButton ="</br></br><button id='printForm'>Print Form</button>"

    //Define Radio Button
    var LoseWeight= document.getElementById("LoseWeight");
    var GainMuscle= document.getElementById("GainMuscle");
    var FeedMicrobiome= document.getElementById("FeedMicrobiome");


    //Define Lose Weight HtML Variables
    var tableHeader="<table><tr><th></th><th>Breakast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>>";
    var MondayMeals= "<td class='meal'>Monday</td><td>Avocado Toast</td><td>String Cheese</td><td>Burrio Bowl</td><td>Boiled Egg</td><td>Spicy Tofu Taco</td></tr>";
    var TuesdayMeals= "<tr><td class='meal'>Tuesday</td><td>3 Egg Omelet</td><td>Protein ball</td><td>Salmon and Asparagus</td><td>Yogurt</td><td>Fish Chowder</td></tr>";
    var WednesdayMeals= " <tr><td class='meal'>Wednesday</td><td>Protein smoothie</td><td>Cottage Cheese</td><td>Cabbage Soup</td><td>Apple & Peanut Butter</td><td>Skillet Salsa Shrimp</td></tr>";
    var ThursdayMeals= " <tr><td class='meal'>Thursday</td><td>Spinach and egg scramble with raspberries</td><td>Boiled Egg</td><td>Quinoa Chicken Bowl</td><td>String Cheese</td><td>White Bean Chili</td></tr>";
    var FridayMeals= " <tr><td class='meal'>Friday</td><td>Berry Almond Smoothie Bowl</td><td>Almonds</td><td>Chipotle Chicken Burrito Bowl</td><td>Boiled Egg</td><td>Veggies on Sweet Potato Mash</td></tr>";
    var SaturdayMeals= "<tr><td class='meal'>Saturday</td><td>Sirach egg & Avocado</td><td>Edamame</td><td>Chili Lime Carnita Bowl</td><td>Roasted Pecans</td><td>Roasted Chicken with Kale</td></tr>";
    var SundayMeals = "<tr><td class='meal'>Sunday</td><td>Peanut Energy Bars</td><td>Popcorn</td><td>Teriyaki Tofu Bowl</td><td>Yogurt</td><td>Chipotle Chicken Fajita</td></tr></table>";

    //Define Gain Muscle HTML Variables

    var tableHeaderGM="<table><tr><th></th><th>Breakast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>>";
    var MondayMealsGM= "<td class='meal'>Monday</td><td>Oatmeal with banana</td><td>Nuts/td><td>Spicy Chicken Couscous</td><td>Whole Grain Crackers and Cheese</td><td>Creamy Cajun Pasta</td></tr>";
    var TuesdayMealsGM= "<tr><td class='meal'>Tuesday</td><td>Yogurt with granola</td><td>Protein Bars</td><td>High Protein Lasagnae</td><td>Edamame</td><td>Harissa Chicken</td></tr>";
    var WednesdayMealsGM= " <tr><td class='meal'>Wednesday</td><td>Peanut Butter smoothie</td><td>Roasted Chickpeas</td><td>Chicken Curry Gyros</td><td>Protein Shake</td><td>Buffalo Chicken Pasta</td></tr>";
    var ThursdayMealsGM= " <tr><td class='meal'>Thursday</td><td>Hard Boiled Egg and Ezekiel Bread</td><td>Pumpkin Seeds</td><td>Chicken Burrito Bowl</td><td>Protein Ball</td><td>Peanut Butter Sesame Chicken</td></tr>";
    var FridayMealsGM= " <tr><td class='meal'>Friday</td><td>Greek Yogurt and Fruit</td><td>Low Sodium Jerkey</td><td>Chicken Burger</td><td>Peanut Butter Toast/td><td>Lime and Chili Burger</td></tr>";
    var SaturdayMealsGM= "<tr><td class='meal'>Saturday</td><td>Protein Pancake</td><td>Canned Tuna</td><td>Pesto Chicken and Veggies</td><td>Chana Masala</td><td>Chicken Satay</td></tr>";
    var SundayMealsGM = "<tr><td class='meal'>Sunday</td><td>Cashew Energy Bars</td><td>Overnight Oats</td><td>Air Fryer Chicken Skewers</td><td>Popiah</td><td>Tikka Masala</td></tr></table>";

    //Define Feed Microbiome HTML Vairables

    var tableHeaderFM="<table><tr><th></th><th>Breakast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>>";
    var MondayMealsFM= "<td class='meal'>Monday</td><td>Five Nut Gronola</td><td>Celery, Carrot, Hummus</td><td>7 greens salad</td><td>Boiled Egg and Siracha</td><td>Butternut Squash soup</td></tr>";
    var TuesdayMealsFM= "<tr><td class='meal'>Tuesday</td><td>5 Fruit Smoothy</td><td>Grapes and cashew butter</td><td>Lemon Caper Cod</td><td>Apple and Cheese</td><td>Pumpkin Chilli</td></tr>";
    var WednesdayMealsFM= " <tr><td class='meal'>Wednesday</td><td>Smoked Salmon Bagel</td><td>Chia Seed Pudding</td><td>Veggie Lasagana</td><td>Boiled egg with Jalapeno</td><td>Caulifower Pizza</td></tr>";
    var ThursdayMealsFM= " <tr><td class='meal'>Thursday</td><td>Hard Boiled Egg and Ezekiel Bread</td><td>Boiled Egg</td><td>Quinoa Chicken Bowl</td><td>String Cheese</td><td>White Bean Chili</td></tr>";
    var FridayMealsFM= " <tr><td class='meal'>Friday</td><td>Spinach Omelet</td><td>Roasted Pecans</td><td>Korean BBQ</td><td>Health Bar</td><td>Basil Pasta</td></tr>";
    var SaturdayMealsFM= "<tr><td class='meal'>Saturday</td><td>Blueberry Waffle</td><td>Applesauce</td><td>Steak and Asparagus</td><td>Boiled Egg</td><td>Chicken Enchilada Soup</td></tr>";
    var SundayMealsFM = "<tr><td class='meal'>Sunday</td><td>Salmon Taco</td><td>Rice and Tofu</td><td>Protein Fruit Smoothie</td><td>Cottage Cheese</td><td>Hashbrown Casserole</td></tr></table>";

    //Create plan for choosen plan using doucment.write
    if(LoseWeight.checked == true && validEmail2 == true){
        var myWindow = window.open("", "_self");
        myWindow.document.write( cssLink + newHeaderLW+ tableHeader + MondayMeals +TuesdayMeals + WednesdayMeals + ThursdayMeals + FridayMeals+ SaturdayMeals + SundayMeals + clearFormButton + printFormButton);
    
    } else if (GainMuscle.checked == true && validEmail2 == true){
        var myWindow = window.open("", "_self");
        myWindow.document.write( cssLink + newHeaderGM+ tableHeaderGM + MondayMealsGM +TuesdayMealsGM + WednesdayMealsGM + ThursdayMealsGM + FridayMealsGM+ SaturdayMealsGM + SundayMealsGM + clearFormButton + printFormButton);
    
    } else if (FeedMicrobiome.checked == true && validEmail2 == true){
        var myWindow = window.open("", "_self");
        myWindow.document.write( cssLink + newHeaderFM+ tableHeaderFM + MondayMealsFM +TuesdayMealsFM + WednesdayMealsFM + ThursdayMealsFM + FridayMealsFM+ SaturdayMealsFM + SundayMealsFM + clearFormButton + printFormButton);
    
    } else {
        window.alert("Make sure all feilds are filled out");
    }

    var clearForm = document.getElementById("clearForm");
    clearForm.addEventListener("click", function (){
        window.open("finalProject.html");
    })

    var printForm = document.getElementById("printForm");
    printForm.addEventListener("click", function (){
        window.print();
    })


}
