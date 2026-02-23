document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('registrationForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('fname').value;
            alert(`مرحباً بك يا ${name}! تم حفظ بياناتك بنجاح.`);
            
            // التوجيه لصفحة الدخول
            window.location.href = 'login.html';
        });
    }
});
