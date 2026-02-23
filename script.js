// Code Maroc Academy - Script Logic
document.addEventListener('DOMContentLoaded', () => {

    // 1. تفعيل نموذج التسجيل (Signup Logic)
    const signupForm = document.getElementById('registrationForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الصفحة من التحديث التلقائي

            // جمع البيانات من الحقول
            const userData = {
                firstName: document.getElementById('fname').value,
                lastName: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                city: document.getElementById('city').value,
                // كلمة المرور لا تُحفظ في LocalStorage لأسباب أمنية في التطبيقات الحقيقية
            };

            // حفظ البيانات في متصفحك (LocalStorage) مؤقتاً
            localStorage.setItem('warriorUser', JSON.stringify(userData));

            // إظهار رسالة نجاح احترافية
            alert(`مرحباً بك يا ${userData.firstName}! تم تسجيل حسابك بنجاح في Code Maroc.`);

            // التوجيه التلقائي لصفحة تسجيل الدخول بعد النجاح
            window.location.href = 'login.html';
        });
    }

    // 2. تفعيل نموذج تسجيل الدخول (Login Logic)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // محاكاة التحقق من الدخول
            alert('جاري التحقق من الهوية... تم الدخول بنجاح!');
            window.location.href = 'index.html';
        });
    }

    // 3. تأثيرات بصرية للأزرار (Interactivity)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)'; // تأثير الضغط
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // 4. رسالة ترحيب في الكونسول (للمبرمجين)
    console.log("%c Code Maroc Academy System Initialized...", "color: #00ff41; font-weight: bold;");
});
