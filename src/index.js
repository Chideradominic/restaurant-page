import './style.css';
const btn = document.querySelectorAll('button');
const lables = ['Menu', 'Home', 'Contact']
btn.forEach((btn,index) =>{
  if (index < lables.length){
    btn.innerHTML = lables[index]
  }
})