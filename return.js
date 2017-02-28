//Return statements...

function isEmailEmpty () {
  let field = document.getElementById('email');
  if (field === '') {
    return true;
  } else {
    return false;
  }
}

let fieldTest = isEmailEmpty() ;
if (fieldTest === true) {
  alert('Please provide your email address');
}
