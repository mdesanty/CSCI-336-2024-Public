document.addEventListener('DOMContentLoaded', function() {
  getDoggo();

  const doggoBtn = document.getElementById('doggo-btn');
  doggoBtn.onclick = getDoggo;

  const doggoImg = document.getElementById('doggo-img');
  doggoImg.onerror = () => {
    doggoImg.src = 'https://i.imgflip.com/849ugl.jpg';
  }
});

const getDoggo = () => {

}
