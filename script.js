function toggleMenu() {
  const menu = document.querySelector(".menu");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openLinkedInProfile(){
  window.open('https://www.linkedin.com/in/gururaj-acharya-563612270/', '_blank');
}
function opengithubProfile(){
  window.open('https://github.com/Guru598','_blank');
}
function openWebsite(){
  window.open('https://guru598.github.io/Journeys-Unveiled-A-travel-blog/Main.html', '_blank');
}
function openLinkedInReport(){
  window.open('https://www.linkedin.com/feed/update/urn:li:activity:7146762944276512768/', '_blank');
}

const parallax = document.getElementById("paral");
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset*0.7+"px"})
