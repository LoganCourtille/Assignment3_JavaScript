/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const full_day_rate = 35;
const half_day_rate = 20;

let tot_days_selected = 0;
let current_rate = "full";
let monday_button = document.getElementById("monday");
let tuesday_button = document.getElementById("tuesday");
let wenseday_button = document.getElementById("wednesday");
let thursday_button = document.getElementById("thursday");
let friday_button = document.getElementById("friday");
let clear_button = document.getElementById("clear-button");
let full_day_button = document.getElementById("full");
let half_day_button = document.getElementById("half");
let cost = document.getElementById("calculated-cost");

monday_button.addEventListener("click", function(){ add_day("monday");});
tuesday_button.addEventListener("click", function(){ add_day("tuesday");});
wenseday_button.addEventListener("click", function(){ add_day("wednesday");});
thursday_button.addEventListener("click", function(){ add_day("thursday");});
friday_button.addEventListener("click", function(){ add_day("friday");});
clear_button.addEventListener("click",clear);
full_day_button.addEventListener("click",change_rate_full);
half_day_button.addEventListener("click",change_rate_half);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_day(day){
    let day_selected = document.getElementById(day).classList;

    if(day_selected.contains("clicked")){
        return;
    } else {
        day_selected.add("clicked");
        tot_days_selected += 1;
    }

    calculate();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear(){
    monday_button.classList.remove("clicked");
    tuesday_button.classList.remove("clicked");
    wenseday_button.classList.remove("clicked");
    thursday_button.classList.remove("clicked");
    friday_button.classList.remove("clicked");
    tot_days_selected = 0;

    calculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function change_rate_half(){
    if (current_rate == "half"){
        return;
    } else {
        half_day_button.classList.add("clicked");
        full_day_button.classList.remove("clicked");
        current_rate = "half";
    }

    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function change_rate_full(){
    if (current_rate == "full"){
        return;
    } else {
        full_day_button.classList.add("clicked");
        half_day_button.classList.remove("clicked");
        current_rate = "full";
    }

    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate(){
    if(current_rate == "full"){
        cost.innerHTML = tot_days_selected * full_day_rate;
    } else {
        cost.innerHTML = tot_days_selected * half_day_rate;
    }
}

