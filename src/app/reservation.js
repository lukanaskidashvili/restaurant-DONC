function reservation()
{
    let name = document.getElementById("name").value;
    let phone = document.getElementById("PHONE").value;
    let person = document.getElementById("number").value;
    let day = document.getElementById("DAY").value 
    let hour = document.getElementById("hour").value;

    let letters = /^[a-zA-Z]+$/;
    let phonePattern = /^\d+$/;  
    let personpattern = /^\d+$/;

     
     let isreservationcorrect = true;

     if(name==''){
        isreservationcorrect = false;
        console.log(alert);
        alert('please enter your name')
     }
     else if(!letters.test(name)) {
        isreservationcorrect = false;
        console.log(alert);
        alert('name fiel requires only alphabet characters')
     }

     if (phone==''){
        isreservationcorrect = false;
        console.log(alert);
        alert('please enert your phone number')

     }
     else if(!phonePattern.test(phone)){
        isreservationcorrect = false;
        console.log(alert);
        alert('Phone field requires only numbers')
     }

     if(person==''){
        isreservationcorrect = false
        console.log(alert);
        alert('please fill only numbers')
     }
     else if(!personpattern.test(person)){
        isreservationcorrect = false;
        console.log(alert);
        alert('please fill only numbers')
     }

     if (day==''){
        isreservationcorrect = false
        console.log(alert);
        alert('please set only day')
     }
     else if(letters.test(day)){
        isreservationcorrect = false;
        console.log(alert);
        alert('please set day')
     }

     if(isreservationcorrect) {
        alert('congratulations')
        window.location.href = "./our-menu.html";
     }

}

function clearInputs()
{
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
}