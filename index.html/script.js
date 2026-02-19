// Splash Animation Hide

window.addEventListener('load', () => {

  setTimeout(() => {

    document.getElementById('splash').style.display = 'none';

    document.getElementById('main').style.display = 'block';

  }, 3000); // 3 seconds

});

// Username Popup Logic

let currentUser = '';

function showUsernamePopup() {

  document.getElementById('username-popup').style.display = 'flex';

}

function setUsername() {

  const input = document.getElementById('username').value.trim();

  if(input){

    currentUser = input;

    document.getElementById('username-popup').style.display = 'none';

    document.getElementById('blog-input').style.display = 'block';

  } else {

    alert("Please enter a username!");

  }

}

// Blog Submission

function submitBlog() {

  const text = document.getElementById('blogText').value.trim();

  const image = document.getElementById('blogImage').files[0];

  if(text === '') return alert("Please write something!");

  const blogSection = document.getElementById('blog-section');

  const blogCard = document.createElement('div');

  blogCard.className = 'blog-card';

  if(image){

    const imgTag = document.createElement('img');

    imgTag.src = URL.createObjectURL(image);

    blogCard.appendChild(imgTag);

  }

  const userTag = document.createElement('h3');

  userTag.textContent = currentUser;

  blogCard.appendChild(userTag);

  const pTag = document.createElement('p');

  pTag.textContent = text;

  blogCard.appendChild(pTag);

  blogSection.appendChild(blogCard);

  // Clear inputs

  document.getElementById('blogText').value = '';

  document.getElementById('blogImage').value = '';

}