window.addEventListener("load", function() {
  if(document.querySelector('input, button[name="submit"]'))
    document.querySelector('input, button[name="submit"]').focus();
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
