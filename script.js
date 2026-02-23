document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من التحديث المفاجئ

    // إظهار رسالة نجاح احترافية
    alert('مرحباً بك في Code Maroc! تم تسجيل حسابك بنجاح.');

    // توجيه المستخدم لصفحة تسجيل الدخول بعد ثانيتين
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});
