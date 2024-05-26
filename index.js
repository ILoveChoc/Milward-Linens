// sign up email in footer

function sendEmail() {
    var userEmail = document.getElementById('emailInput').value;
    var adminEmail = "rk@mkhproperties.com.au";
    var subject = encodeURIComponent("Newsletter Subscription Request");
    var emailBody = encodeURIComponent("Hello, I would like to subscribe to the newsletter. Please add " + userEmail + " to your mailing list.");

    var mailtoLink = 'mailto:' + adminEmail + '?subject=' + subject + '&body=' + emailBody;

    window.location.href = mailtoLink;

    document.getElementById('emailInput').value = '';

    var footerMessageStatus = document.getElementById('footerMessageStatus');
    footerMessageStatus.textContent = 'Thank you for subscribing!';
    footerMessageStatus.style.display = 'block';

    return false;
}


// hamburger menu on header when media query is active

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const navbar = document.querySelector('.nav_bar');
    const body = document.body;

    function toggleMenu() {
        navbar.classList.toggle('active');

        if (navbar.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
}); 


// display and hide product details for each item in collection

function toggleContent(button) {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    const allContents = document.querySelectorAll('.toggle-content');
    allContents.forEach(content => {
        if (content.id !== targetId) {
            content.style.display = 'none'; 
        }
    });

    const allButtons = document.querySelectorAll('.toggle-button');
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.textContent = '+';
        }
    });

    if (targetContent.style.display === 'none' || targetContent.style.display === '') {
        targetContent.style.display = 'block'; 
        button.textContent = '-'; 
    } else {
        targetContent.style.display = 'none';
        button.textContent = '+';
    }
}


// image carousel on each product of collection

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].style.display = 'none';
    slideIndex += step;

    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }

    slides[slideIndex].style.display = 'block';
}

window.onload = function() {
    document.querySelector('.slide').style.display = 'block';
}


// contact page form send email

function sendInfo() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var comment = document.getElementById('comment').value;

    var adminEmail = "rk@mkhproperties.com.au"; 
    var emailBody = "Name: " + encodeURIComponent(name) +
        "%0AEmail: " + encodeURIComponent(email) +
        "%0APhone: " + encodeURIComponent(phone) +
        "%0AComment: " + encodeURIComponent(comment);
    var mailtoLink = 'mailto:' + adminEmail + '?subject=Contact from Website&body=' + emailBody;

    window.location.href = mailtoLink;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('comment').value = '';

    var messageStatus = document.getElementById('messageStatus');
    messageStatus.textContent = 'Thank you for your message. It has been sent.';
    messageStatus.style.display = 'block';

    return false;
}





