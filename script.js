document.addEventListener('DOMcontentloaded', () => {
   const inputs = document.querySelectorAll('.input-group input');

   inputs.forEach(input => {
      input.addEventListener('input', () => {
         if (input.value.trim () != '') {
            input.classlist.add('has-value');
         } else {
            input.classlist.remove('has-value');
         }
      });
   });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {e.preventDefualt();

   const username = document.getElementById('username').values;
   const password = document.getElementById('password').value;

   if (username.trim() === '' || password.trim() === '') {
      this.classlist.add('shake');
      settimeout(() => this.classlist.remove('shake'), 500);
   } else {
      alert('login successful!');
   }
});