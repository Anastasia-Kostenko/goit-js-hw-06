const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
    event.preventDefault();
    
    const {email, password} = event.currentTarget.elements
    if (email.value === "" || password.value === "") {
        alert('Будь ласка, заповніть всі поля');
    } else {
    console.log({ email: email.value, password: password.value });
    loginForm.reset();
    }
};
