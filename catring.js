/*let  booknow = document.querySelectorAll('now');
console.log(booknow) 
   
    
booknow.addEventListener("click", ()=>{

     let contact=document.createElement('div');
     contact.innerHTML=`<div id="cont">
     <h1 class="taks">Contact From</h1>
 
     <label for="name">Name</label><br>
     <input type="name" id="name" value="name" required><br>
 
     <label for="email">Email</label><br>
     <input type="email" id="email" value="email" required><br>
 
     <label for="address">Address</label><br>
     <input type="address" id="address" value="address" required><br>
 
     <label for="phone">Phone No</label><br>
     <input type="phone" id="phone" value="phone" required><br>
 
     <label for="event">Event Day</label><br>
     <input type="event" id="event" value="event" required><br>
 
     <input type="submit" value="submit" class="creat">

     <button class='cancel' onclick='Delete'>ok</button>
 </div>`

   document.body.append(contact)
})

function Detele(){
    contcat.remove();
} */  


 let booknow = document.querySelectorAll('.now');
    console.log(booknow);

    booknow.forEach(element => {
        element.addEventListener("click", () => {
            console.log('cicked')
            let contact = document.createElement('div');
            contact.innerHTML = `<div id="cont">
            <h1 class="task">Contact Form</h1>

            <label for="name" class="my">Name</label><br>
            <input type="text" id="name" class="your"  required><br>

            <label for="email" class="my">Email</label><br>
            <input type="email" id="email" class="your"  required><br>

            <label for="address"class="my">Address</label><br>
            <input type="text" id="address" class="your"  required><br>

            <label for="phone" class="my">Phone No</label><br>
            <input type="text" id="phone" class="your" required><br>

            <label for="event" class="my">Event Day</label><br>
            <input type="text" id="event" class="your" required><br>

            <input type="submit" value="submit" class="creat">

            <button class='cancel' onclick='Delete()'>Cancel</button>
            </div>`;
            document.body.appendChild(contact);
        });
    });

    function Delete() {
        let contact = document.getElementById('cont');
        contact.remove();
    }