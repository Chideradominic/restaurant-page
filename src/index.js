import './style.css';
import { createHomeTab } from './tabs/home';
import { createContactTab } from './tabs/contact';
import { createMenuTab } from './tabs/menu';

const homeTab =createHomeTab();
const menuTab = createMenuTab();
const contactTab = createContactTab();
const btn = document.querySelectorAll('button');
const lables = ['Home', 'Menu', 'Contact']
loadTab(homeTab);
btn.forEach((btn,index) =>{
  if (index < lables.length){
    btn.innerHTML = lables[index]
  };
  if (btn.innerText === lables[0]){
    btn.onclick = () => loadTab(menuTab);
    
  }
  else if (btn.innerText === lables[1]){
    btn. onclick = () => loadTab(homeTab)
  }
  else if (btn.innerText === lables[2]){
    btn. onclick = () => loadTab(contactTab)
  }

});

  
function loadTab(tab) {
  const content = document.getElementById('content');
  content.innerHTML='';
  content.appendChild(tab);
  
}

