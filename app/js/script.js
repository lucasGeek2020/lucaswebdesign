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



let linkHome = document.querySelector("#linkHome")
let linkPort = document.querySelector("#linkPort")
let linkContact = document.querySelector("#linkContact")

let projetc = document.querySelector("#projects")
let contact = document.querySelector("#contact")

function offset(el) {
  var rect = el.getBoundingClientRect()
 
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return  rect.top + scrollTop-200
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





