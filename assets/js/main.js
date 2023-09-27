const menuToggle = document.querySelector('#menu_btn');
const navbar = document.querySelector('.navigation_container');
const header = document.querySelector('.header')

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  header.classList.toggle("active_header")
});

const closeBtn = document.querySelector('#close_btn')

closeBtn.addEventListener('click',()=>{
    navbar.classList.remove('active');
    header.classList.remove('active_header')
})




const code = `
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
`;

const editor = document.querySelector('#editor');
let currentText = '';
let currentIndex = 0;

function typeText() {
  editor.textContent = currentText.slice(0, currentIndex);
  currentIndex++;

  if (currentIndex <= currentText.length) {
    setTimeout(typeText, 50); // Type speed (ms)
  } else {
    setTimeout(eraseText, 1000); // Pause before erasing (ms)
  }
}

function eraseText() {
  editor.textContent = currentText.slice(0, currentIndex);
  currentIndex--;

  if (currentIndex >= 0) {
    setTimeout(eraseText, 25); // Erase speed (ms)
  } else {
    currentIndex = 0;
    setTimeout(typeText, 1000); // Pause before typing (ms)
  }
}

currentText = code.trim();
setTimeout(typeText, 1000); 








const skills = [
  { bar: document.querySelector('.progressH'), percent: 0 },
  { bar: document.querySelector('.progressC'), percent: 0 },
  { bar: document.querySelector('.progressBt'), percent: 0 },
  { bar: document.querySelector('.progressJs'), percent: 0 },
  { bar: document.querySelector('.progressD'), percent: 0 }
];

const updateProgressBar = (bar, percent) => {
  if (percent <= bar.ariaValueMax) {
    bar.style.width = percent + '%';
    bar.innerHTML = percent + '%';
    percent++;
  }
  return percent;
};

onload = () => {
  const interval = setInterval(() => {
    let allDone = true;
    skills.forEach(skill => {
      skill.percent = updateProgressBar(skill.bar, skill.percent);
      if (skill.percent <= skill.bar.ariaValueMax) {
        allDone = false;
      }
    });
    if (allDone) {
      clearInterval(interval);
    }
  }, 100);
};




const page = document;
let menu = page.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
});