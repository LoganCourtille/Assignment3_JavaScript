// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function thank_form(){
    var parent_main = document.getElementById("contact-page");
    let paragraph = document.createElement("p");
    
    parent_main.innerHTML = "";
    paragraph.textContent = "Thank you for your message!";
    parent_main.append(paragraph);
}
