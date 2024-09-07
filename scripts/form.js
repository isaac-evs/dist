document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const isNameValid = validateName(nameInput.value);
        const isEmailValid = validateEmail(emailInput.value);
        if (isNameValid && isEmailValid) {
            form.submit();
            showSuccessMessage("Your email has been sent successfully!");
        }
        else {
            if (!isNameValid) {
                alert("Please enter a valid name. It should be at least 2 characters long.");
            }
            if (!isEmailValid) {
                alert("Please enter a valid email address.");
            }
        }
    });
    function validateName(name) {
        return name.trim().length >= 2;
    }
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function showSuccessMessage(message) {
        var _a;
        const successMessageDiv = document.createElement("div");
        successMessageDiv.textContent = message;
        successMessageDiv.style.color = "green";
        successMessageDiv.style.marginTop = "20px";
        successMessageDiv.style.fontSize = "1.2rem";
        successMessageDiv.style.textAlign = "center";
        (_a = form.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(successMessageDiv);
        setTimeout(() => {
            successMessageDiv.remove();
        }, 5000);
    }
});