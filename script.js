document.addEventListener('DOMContentLoaded', () => {
    // تفعيل نموذج التسجيل إذا كان المستخدم في صفحة signup.html
    const regForm = document.getElementById('registrationForm');
    
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // محاكاة حفظ البيانات وإظهار رسالة نجاح
            const name = document.getElementById('fname').value;
            alert(`مرحباً بك يا ${name}! تم تسجيل حسابك بنجاح في Code Maroc.`);
            
            // التوجيه لصفحة تسجيل الدخول
            window.location.href = 'login.html';
        });
    }

    // تأثير بسيط عند الضغط على أزرار الدروس
    const lessonBtns = document.querySelectorAll('.btn-lesson');
    lessonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("تم فتح الدرس...");
        });
    });
});
