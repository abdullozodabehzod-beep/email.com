const form = document.getElementById('registerForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repassword = document.getElementById('repassword');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const repasswordError = document.getElementById('repasswordError');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail(email) {
      // простая проверка email
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // чтобы не перезагружалась страница

      // Очищаем старые ошибки
      emailError.textContent = '';
      passwordError.textContent = '';
      repasswordError.textContent = '';
      successMessage.textContent = '';

      let hasError = false;

      // Проверка email
      if (!email.value.trim()) {
        emailError.textContent = 'Введите email';
        hasError = true;
      } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Неверный формат email';
        hasError = true;
        
      }

      // Проверка пароля
      if (!password.value) {
        passwordError.textContent = 'Введите пароль';
        hasError = true;
      } else if (password.value.length < 6) {
        passwordError.textContent = 'Пароль должен быть не меньше 6 символов';
        hasError = true;
      }

      // Проверка повтора пароля
      if (!repassword.value) {
        repasswordError.textContent = 'Повторите пароль';
        hasError = true;
      } else if (password.value !== repassword.value) {
        repasswordError.textContent = 'Пароли не совпадают';
        hasError = true;
      }

      if (!hasError) {
        // Если всё нормально
        successMessage.textContent = 'Регистрация прошла успешно!';
        form.reset();
      }
    });


