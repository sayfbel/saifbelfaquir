const burger = document.getElementById('burger');
const div = document.getElementById('navmobile');
burger.addEventListener('change', function() {
    if(this.checked){
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
  });
  //LearnMore
  const LearnMore = document.getElementById('LearnMore');
  const infolearnmore = document.getElementById('infolearnmore');
  LearnMore.addEventListener('click', function() {
    if(this.checked){
      infolearnmore.style.display = 'flex';
      document.getElementById('textLearnMore').textContent = 'back';
    }
    else{
      infolearnmore.style.display = 'none';
      document.getElementById('textLearnMore').textContent = 'LEARN MORE';
    }
  });
  //scroll logo color
  const logo = document.getElementById('LOGO');
  const head = document.getElementById('headre');
  window.onscroll = function() {
    let value = scrollY;
    if(value >= 98){
        head.style.backgroundColor = '#fff'; 
        logo.style.color = '#e09018';
    }
    else{
        logo.style.color = '#fff';
        head.style.backgroundColor = 'transparent';
    }
}
  function scrolll(){
    var left = document.querySelector('.scroll-images');
    left.scrollBy(500,0)
  }
  function scrollr(){
    var right = document.querySelector('.scroll-images');
    right.scrollBy(-500,0)
  }
  /**/
/*setRating scroll*/ 
function setRatingP1(rating) {
    const stars = document.getElementsByClassName('P1');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }
    document.getElementById('rating1').textContent = '( ' + rating + ' )';
  }
  function setRatingP2(rating) {
    const stars = document.getElementsByClassName('P2');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating2').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP3(rating) {
    const stars = document.getElementsByClassName('P3');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating3').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP4(rating) {
    const stars = document.getElementsByClassName('P4');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating4').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP5(rating) {
    const stars = document.getElementsByClassName('P5');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating5').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP6(rating) {
    const stars = document.getElementsByClassName('P6');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating6').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP7(rating) {
    const stars = document.getElementsByClassName('P7');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating7').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP8(rating) {
    const stars = document.getElementsByClassName('P8');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating8').textContent = '( ' + rating + ' )';
    }
  }
  function setRatingP9(rating) {
    const stars = document.getElementsByClassName('P9');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
      document.getElementById('rating9').textContent = '( ' + rating + ' )';
    }
  }
  /**/
  function search_meals() {
     // Check if enter key is pressed (keyCode 13)
     if (event.keyCode === 13) {
      window.location.href = "menu/index.html";
    }
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('meals');
  
    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "list-item";
      }
    }
  
   
  }