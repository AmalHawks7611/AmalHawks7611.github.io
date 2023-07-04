let slideIndexSponsor = 1;
showslideSponsor(slideIndexSponsor);

function plusslideSponsors(n) {
  showslideSponsor(slideIndexSponsor += n);
}

function showslideSponsor(n) {
  let i;
  let slideSponsor = document.getElementsByClassName("sponsors");
  
  if (n > slideSponsor.length) {slideIndexSponsor = 1}    
  if (n < 1) {slideIndexSponsor = slideSponsor.length}
  for (i = 0; i < slideSponsor.length; i++) {
    slideSponsor[i].style.display = "none";  
  }
  slideSponsor[slideIndexSponsor-1].style.display = "block";  
}