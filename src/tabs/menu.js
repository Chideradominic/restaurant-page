export function createMenuTab() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('tab')
  menuDiv.innerHTML =`
  <h2>Menu</h2>
    <p>Here is our delicious menu!</p>
  `
  return menuDiv;
}