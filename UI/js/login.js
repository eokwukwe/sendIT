const logout = document.querySelectorAll('.logout');
const orderBtn = document.querySelectorAll('.order-btn');
const username = document.querySelector('#loginemail');
const password = document.querySelector('#loginpwd');
const loginData = document.forms['login-form'];

const loginSubmit = (e) => {
  e.preventDefault();

  const uname = username.value;
  const psswd = password.value;

  console.log(uname, psswd);

  loginData.reset();
  if (uname === 'admin@mail.com') {
    return (window.location.href = 'admin.html');
  }
  return (window.location.href = 'user.html');
};

if (document.readyState === 'loading' || document.readyState === 'complete') {
  logout.forEach(das => (das.style.display = 'none'));
  orderBtn.forEach(item => (item.style.display = 'none'));
  loginData.addEventListener('submit', loginSubmit);
}
