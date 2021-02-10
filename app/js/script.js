//style of inputs

$(document).ready(function () {

  $('input').blur(function () {

    if ($(this).val())
      $(this).addClass('used');
    else
      $(this).removeClass('used');

  });
  $('textarea').blur(function () {

    if ($(this).val())
      $(this).addClass('used');
    else
      $(this).removeClass('used');

  });


});

//scroll links

let linkHome = document.querySelector("#linkHome")
let linkPort = document.querySelector("#linkPort")
let linkContact = document.querySelector("#linkContact")

let projetc = document.querySelector("#projects")
let contact = document.querySelector("#contact")

function offset(el) {
  var rect = el.getBoundingClientRect()

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop - 200
}


window.addEventListener("scroll", function (event) {

  var scroll = this.scrollY

  if (scroll < offset(projetc)) {
    linkHome.classList.add("open")
  } else {
    linkHome.classList.remove("open")

  }
  if (scroll > offset(projetc) && scroll < offset(contact)) {
    linkPort.classList.add("open")
  } else {
    linkPort.classList.remove("open")
  }

  if (scroll > offset(contact)) {
    linkContact.classList.add("open")
  } else {
    linkContact.classList.remove("open")
  }
})

//snackbar 
const Divresult = document.querySelector("#resultado")

function showResult(result, status){

  
    Divresult.innerHTML = result
    
    Divresult.classList.add(status)
    Divresult.classList.add("active")
  
     setTimeout(function () {
      Divresult.classList.remove('active');
      Divresult.classList.remove(status);
  }, 3000)
  
}

//ajax to send email

document.contact__form.onsubmit = async e => {
  e.preventDefault()

  const form = e.target
  const data = new FormData(form)

  const options = {
    method: form.method,
    body: new URLSearchParams(data)
  }
  /*
  fetch(form.action, options)
    .then(resp => console.log(resp))
*/
  fetch(form.action, options)
    .then(response => response.text())
    .then(function(result){ 
      console.log(result)
      showResult(result, "then")
    })
    .catch(function(err){
      showResult(err, "erro")
    })
      
}




