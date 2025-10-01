document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.text();
        alert(data);
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });
  }
});
