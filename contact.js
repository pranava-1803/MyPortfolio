// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");

    // Add an event listener for form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get input values from the form
        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        // Check if all fields are filled
        if (name && email && message) {
            // Save data to localStorage
            const formData = {
                name: name,
                email: email,
                message: message,
                submittedAt: new Date().toLocaleString(),
            };
            const contactData = JSON.parse(localStorage.getItem("contactMessages")) || [];
            contactData.push(formData);
            localStorage.setItem("contactMessages", JSON.stringify(contactData));

            // Show success popup
            alert("Message sent successfully!");

            // Clear the form fields
            contactForm.reset();
        } else {
            // Show an error popup if fields are empty
            alert("Please fill out all fields before submitting.");
        }
    });
});
