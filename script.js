document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            // إضافة تأثير عند الضغط
            const step = button.closest('.step');
            step.style.boxShadow = "0 0 20px #00ff41";
            
            // تنبيه بسيط للمستخدم (يمكن استبداله بفتح الفيديو لاحقاً)
            console.log("تم اختيار الدرس: " + (index + 1));
        });
    });
});