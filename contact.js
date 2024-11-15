document.getElementById('advertisingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending email (actual email handling requires a backend so remeber to find a backend dev)
    const emailData = {
        to: 'podcast_email@example.com', // Miles Remember to replace with the actual podcast email address
        subject: `Advertising Inquiry from ${name}`,
        body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Mock response for demonstration
    document.getElementById('formResponse').textContent = 'Thank you! Your message has been sent.';
    document.getElementById('advertisingForm').reset();
});
