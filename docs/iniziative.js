var slideIndex = [0];
var slideId = ["gallery2"];

showSlides(0, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementById(slideId[no]).getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}