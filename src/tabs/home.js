export function createHomeTab() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-tab');
  homeDiv.innerHTML =`
  <div><h1>HotChix</h1></div>
    <div><h2> Healthy food to live a healthier life in the future</h2></div>
    <div><p> Enjour a healthy life by eathing healthy foods that have extraordinary flavours taht make your life healther for today and in the future<p></div>
    <div><img src="/src/cake.jpg"></div>
  `
  return homeDiv;
}