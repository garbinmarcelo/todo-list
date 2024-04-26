window.addEventListener("load", function() {
  const navbar = document.getElementById('navbar');

  fetch('../menu.html')
    .then(res=> res.text())
    .then(data=> {
      navbar.innerHTML = data
      let urlPath = '../' + window.location.pathname.split('/').slice(-2).join('/');
      document.querySelector(`a.list-group-item[href="${urlPath}"]`).classList.add('active', 'fw-bold');
    });

  if(document.querySelector('input, button[name="submit"]'))
    document.querySelector('input, button[name="submit"]').focus();

  if(document.querySelector('button[type="reset"]'))
    document.querySelector('button[type="reset"]').addEventListener('click', function() {
      resetform();
    });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('[name="submit"]').click();
  }
});

function bsAlert(message, type='success', IdElement = 'alert') {
  document.getElementById(IdElement).innerHTML =
    `<div id="bsAlert" class="alert alert-${type} alert-dismissible" role="alert">
       <div>${message}</div>
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

function resetform() {
  document.getElementsByTagName("form")[0].reset();
  if(document.getElementById('bsAlert'))
    document.getElementById('bsAlert').remove();
}