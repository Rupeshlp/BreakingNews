console.log('Hello World!');
const correctPassword = "bestie"; // You can change this to "friend" or any inside joke
const funnyStatements = document.getElementById('funnyStatement');

document.getElementById('submitPassword').addEventListener('click', function() {
  const passwordInput = document.getElementById('passwordInput').value;
  const errorMessage = document.getElementById('errorMessage');
  
  if (passwordInput === correctPassword) {
    document.getElementById('passwordScreen').classList.add('hidden');
    document.getElementById('contentScreen').classList.remove('hidden');
    displayFunnyContent();
  } else {
    errorMessage.textContent = "Wrong! Are you even my real bestie?";
    errorMessage.classList.remove('hidden');
  }
});

function displayFunnyContent() {
  const funnyContentDiv = document.getElementById('funnyContent');
  const funnyVideosDiv = document.getElementById('funnyVideos');
  
  // funnyStatement.forEach(statement => {
    // const h1 = document.createElement('p');
    // p.textContent = statement;
    // funnyContentDiv.appendChild(p);
    
  // });
  
  // Add some funny memes or images
  const memes = [
    "https://i.imgur.com/1z5Z5gD.jpg", // Replace with your meme URLs
    "https://i.imgur.com/2z5Z5gD.jpg",
    "https://i.imgur.com/3z5Z5gD.jpg"
  ];
  
  // memes.forEach(meme => {
  //   const img = document.createElement('img');
  //   img.src = meme;
  //   img.alt = "Funny Meme";
  //   img.style.width = "200px"; // Adjust size as needed
  //   img.style.margin = "10px";
  //   funnyContentDiv.appendChild(img);
  // });
  
  // Show the reveal message after a short delay
  
  
  document.getElementById('next').addEventListener('click', function() {
    
    document.querySelector('.revealMessage').classList.remove('hidden');
    
    document.getElementById('next').classList.add('hidden');
    
    funnyContentDiv.classList.add('hidden');
    
    funnyStatements.classList.add('hidden');
    
    document.getElementById('harding').classList.add('hidden');
    
  });
    
  // setTimeout(() => {
  //   document.querySelector('.revealMessage').classList.remove('hidden');
  // }, 3000); // Adjust the delay as needed
}
