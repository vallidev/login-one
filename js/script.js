const btnPassword = document.getElementById('password_toggle');
let toggle = false;

const togglePassword = () => {
  const inputPassword = document.getElementById('password');

  if(toggle) {
    btnPassword.innerText = 'visibility';
    inputPassword.setAttribute('type', 'password');
  } else {
    btnPassword.innerText = 'visibility_off';
    inputPassword.setAttribute('type', 'text');
  }

  toggle = !toggle;
}

btnPassword.addEventListener('click', togglePassword);