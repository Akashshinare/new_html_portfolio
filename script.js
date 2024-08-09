let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(message => message.remove());
        
        let isValid = true;

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
            showError(email, 'Valid email is required');
            isValid = false;
        }

        // Validate Number
        const number = document.getElementById('number');
        const numberPattern = /^\d{10}$/;
        if (number.value.trim() === '' || !numberPattern.test(number.value.trim())) {
            showError(number, 'Valid phone number is required (10 digits)');
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Message cannot be empty');
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement('p');
        error.classList.add('error');
        error.style.color = 'red';
        error.textContent = message;
        input.parentElement.appendChild(error);
    }
});

function sendLinkedInMessage() {
    // LinkedIn message URL template
    const linkedinMessageURL = 'https://www.linkedin.com/messaging/compose/?recipient=14566421b&subject=Hire%20Me&message=Hello%20Akash%2C%20I%20am%20interested%20in%20your%20services.%20Please%20find%20my%20contact%20details%20below.%0A%0AName%3A%20%0AEmail%3A%20%0APhone%3A%20%0AMessage%3A%20';

    // Open the URL in a new tab
    window.open(linkedinMessageURL, '_blank');
}