document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من التحديث

    // جمع البيانات من الحقول
    const userData = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value
    };

    // حفظ البيانات مؤقتاً في المتصفح
    localStorage.setItem('warriorUser', JSON.stringify(userData));

    // إظهار رسالة نجاح وتوجيه المستخدم لصفحة الدخول
    alert('تم تسجيلك بنجاح يا محارب! سيتم توجيهك لصفحة الدخول الآن.');
    window.location.href = 'login.html';
});
