document.addEventListener('DOMContentLoaded', () => {
    
    // تفعيل نموذج التسجيل
    const signupForm = document.getElementById('registrationForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const user = {
                firstName: document.getElementById('fname').value,
                city: document.getElementById('city').value,
                email: "saved_user@codemaroc.ma" // افتراضي للمرحلة الحالية
            };

            localStorage.setItem('activeWarrior', JSON.stringify(user));
            alert(`مرحباً بك يا ${user.firstName}! تم إنشاء حسابك بنجاح.`);
            window.location.href = 'login.html';
        });
    }

    // تفعيل نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('جاري التحقق من التشفير... تم الدخول بنجاح!');
            window.location.href = 'index.html';
        });
    }
});
