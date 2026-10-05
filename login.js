 const ACCOUNTS = {
      "admin@gmail.com": { pass: "admin", redirect: "admin/dashboard.html" },
      "staff@gmail.com": { pass: "staff", redirect: "staff/dashboard.html" },
      "volunteer@gmail.com": { pass: "volunteer", redirect: "user/dashboard.html" }
    };

    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value;
      const errorBox = document.getElementById('loginError');

      if (ACCOUNTS[email] && ACCOUNTS[email].pass === password) {
        errorBox.style.display = 'none';
        window.location.href = ACCOUNTS[email].redirect;
      } else {
        errorBox.style.display = 'block';
      }
    });