export function createContactTab() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-tab');


 
  contactDiv.innerHTML =`
  <h2>Contact</h2>
  <div><label for ="first-name"> First Name <span>*</span> <label/></div>
  <input type="text" id= "first-name" placeholder = "First Name" </div>
 <div><label for ="last-name"> Last Name <span>*</span> </label></div>
   <input type="text" id= "last-name" placeholder = "Last name" </div>   
  <div><label for ="phone-number"> Tel <span>*</span> </label></div>
   <input type="tel" id= "phone-number" placeholder = "Phone Number" </div> 
   <div><button type=button> submit</button></div>
 `
  return contactDiv;
}