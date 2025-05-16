document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Show loading state on button
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Get form data
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData.entries());
            
            // Send data to our own API endpoint
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            // Hide form and show success message
            form.reset();
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error submitting your form. Please try again.');
        } finally {
            // Restore button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});
