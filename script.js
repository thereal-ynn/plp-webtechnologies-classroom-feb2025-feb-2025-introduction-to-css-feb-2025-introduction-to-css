// Form validation for contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for your message!");
        document.getElementById('contactForm').reset(); // Reset form after submission
    } else {
        alert("Please fill out all fields.");
    }
});