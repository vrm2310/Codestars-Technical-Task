function validateEmail() {
    const emailInput = document.getElementById("email-input").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const messageContainer = document.createElement("p");

    const existingMessage = document.getElementById("email-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    if (emailPattern.test(emailInput)) {
        messageContainer.textContent = "Email sent successfully";
        console.log(messageContainer.textContent)
        messageContainer.style.color = "green";
    } else {
        messageContainer.textContent = "Please enter a valid email ID";
        console.log(messageContainer.textContent)
        messageContainer.style.color = "red";
    }

    messageContainer.id = "email-message";
    document.getElementById("email-section").appendChild(messageContainer);
}

document.getElementById("email-submit").addEventListener("click", function() {
    validateEmail();
    document.getElementById("email-input").value = "";
});

document.getElementById("email-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateEmail();
        document.getElementById("email-input").value = ""; 
    }
});
