let hambrgerIcon = document.querySelector(".humbrger-menu");
let HambrgerMenu = document.querySelector(".hamburger-menu-items");
let xIcon = document.querySelector(".x-icon")
 const userNameInp = document.querySelector(".user-input")
 const emailInp = document.querySelector(".email-input")
 const phoneInp = document.querySelector(".phone-number")
 const textAraea = document.querySelector(".textarea")
const  nameMsg = document.querySelector(".name-msg")
const  emailMsg = document.querySelector(".email-msg")
const  textMsg = document.querySelector(".message-msg")
const  sentMsg = document.querySelector(".sent-status")
const sentBtn = document.querySelector(".sent-btn")
 
hambrgerIcon.addEventListener("click", function () {
    HambrgerMenu.classList.add("show-hamburger-menu")
});


xIcon.addEventListener("click", function () {
    HambrgerMenu.classList.remove("show-hamburger-menu")
})

sentBtn.addEventListener("click", sentMessage);

 function sentMessage (event) {
    event.preventDefault();
    nameMsg.innerText = "";
    emailMsg.innerText = ""; 
    textMsg.innerText = "";
    const userValue = userNameInp.value;
    const emailValue = emailInp.value; 
    const textValue = textAraea.value;
    let ifSendData = true;
    

    if (userValue.length === 0) {
        nameMsg.innerText = "Please enter your Name ";
        ifSendData = false;
    }



   /// function (NFFFDNNVIFD ) 
    

    if (emailValue.length === 0 || emailValue.indexOf("@")  === -1 || emailValue.indexOf(".") === -1) {
        emailMsg.innerText = "Please enter a valid Email"; 
         ifSendData = false;
    }
   
   
   if (textValue.length === 0) {
  /*   textMsg.innerText = "Please inter your message"; */
    ifSendData = false;
   }
    if (ifSendData) {
       const body = JSON.stringify({
        username: userValue,
        emali:  emailValue, 
       })
       const headers = {
        "content-Type": "application/json"
       }
       fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: body,
        header: headers
       })
       .then(response =>  {
        nameMsg.innerText = "";
        emailMsg.innerText = ""; 
        textMsg.innerText = "";
        if (response.ok) {
            sentMsg.innerText = " Sent your message successfully"
        }
       })
 }
 }