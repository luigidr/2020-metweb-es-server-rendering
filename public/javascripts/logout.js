'use strict';

const logoutEl = document.getElementById('logout');

if(logoutEl) {
  logoutEl.addEventListener('click', () => {
    fetch('/sessions/current', { method: 'DELETE' })
    .then(()=> window.location = '/login');
  });
}
