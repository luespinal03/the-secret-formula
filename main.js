// PART 1 
let formOne = document.querySelector('#part1');
let inputText = document.querySelector('#userInput');


formOne.addEventListener('submit', function (){
    if(inputText.value !== '') {alert(`${inputText.value}`)
} else {
    alert('Please input a name');
}
});
//  PART 1


// PART 2

let formTwo = document.querySelector('#sandwich');


// BREADS
let italian = document.querySelector('#italian');
let ciabatta = document.querySelector('#ciabatta');
let pita = document.querySelector('#pita');
let wholeWheat = document.querySelector('#whole-wheat');
let rye = document.querySelector('#rye');
// BREADS


//  MEATS
let pepperoni = document.querySelector('#pepperoni');
let ham = document.querySelector('#ham');
let mortadella = document.querySelector('#mortadella');
let salami = document.querySelector('#salami');
let chicken = document.querySelector('#chicken');
let nomeat = document.querySelector('#nomeat');
//  MEATS


// CHEESES 
let gouda = document.querySelector('#gouda');
let monterey = document.querySelector('#monterey');
let american = document.querySelector('#american');
let mounster = document.querySelector('#mounster');
let provolone = document.querySelector('#provolone');
let nocheese = document.querySelector('#nocheese');
//  CHEESES


// HERBS
let lettuce = document.querySelector('#lettuce');
let spinach = document.querySelector('#spinach');
let pickles = document.querySelector('#pickles');
let olives = document.querySelector('#olives');
let jalapeno = document.querySelector('#jalapeno');
let noherbs = document.querySelector('#noherbs');
// HERBS


// CONDIMENTS
let salt = document.querySelector('#salt');
let pepper = document.querySelector('#pepper');
let vinegar = document.querySelector('#vinegar');
let pickleJu = document.querySelector('#pickle-juice');
let garlic = document.querySelector('#garlic');
let nocondiments = document.querySelector('#nocondiments');
// CONDIMENTS




formTwo.addEventListener('submit', function(){
    event.preventDefault();
    
// BREADS
let breadType = '';
    if (italian.checked === true) {
        breadType = "Italian";
    } else if (ciabatta.checked === true) {
        breadType = "Ciabatta";
    } else if (pita.checked === true) {
        breadType = "Pita";
    } else if (wholeWheat.checked === true){
        breadType = "Whole-Wheat";
    } else if (rye.checked === true){
        breadType = "Rye";
    }
console.log(breadType);
// BREADS


// MEATS
let meatTypes = '';
if (pepperoni.checked === true) {
    meatTypes += " Pepperoni, ";
}  if (ham.checked === true) {
    meatTypes += " Ham, ";
}  if (mortadella.checked === true) {
    meatTypes += " Mortadella, ";
}  if (salami.checked === true){
    meatTypes += " Salami, ";
}  if (chicken.checked === true){
    meatTypes += " Chicken-Roll, ";
} if (nomeat.checked === true){
    meatTypes += " No Meat, "
}
console.log(meatTypes);
// MEATS


// CHEESES
let cheeseTypes = '';
if (gouda.checked === true) {
    cheeseTypes += " Gouda ";
}  if (monterey.checked === true) {
    cheeseTypes += " Monterey ";
}  if (american.checked === true) {
    cheeseTypes += " American ";
}  if (mounster.checked === true){
    cheeseTypes += " Mounster ";
}  if (provolone.checked === true){
    cheeseTypes += " Provolone ";
}  if (nocheese.checked === true){
    cheeseTypes += " No Cheese ";
}
console.log(cheeseTypes);
// CHEESES


// HERBS
let herbTypes = '';
if (lettuce.checked === true) {
    herbTypes += " Lettuce, ";
}  if (spinach.checked === true) {
    herbTypes += " Spinach, ";
}  if (pickles.checked === true) {
    herbTypes += " Pickles, ";
}  if (olives.checked === true){
    herbTypes += " Olives, ";
}  if (jalapeno.checked === true){
    herbTypes += " Jalapeno, ";
}  if (noherbs.checked === true){
    herbTypes += " No Herbs, "
}
console.log(herbTypes);
// HERBS


//  CONDIMENTS
let condimentTypes = '';
if (salt.checked === true) {
    condimentTypes += " Salt, ";
}  if (pepper.checked === true) {
    condimentTypes += " Pepper, ";
}  if (vinegar.checked === true) {
    condimentTypes += " Vinegar-Oil, ";
}  if (pickleJu.checked === true){
    condimentTypes += " Pickle-Juice, ";
}  if (garlic.checked === true){
    condimentTypes += " Garlic, ";
}  if (nocondiments.checked === true){
    condimentTypes += " No Condiments "
}
console.log(condimentTypes);
//  CONDIMENTS




    alert(`Your order:   Bread type: ${breadType},   Meat type(s): ${meatTypes}  Cheese type(s): ${cheeseTypes},  Herb type(s): ${herbTypes}   Condiment type(s): ${condimentTypes}.`)


//  RESETS
    // BREADS
    italian.checked = false;
    ciabatta.checked = false;
    pita.checked = false;
    wholeWheat.checked = false;
    rye.checked = false;
    // BREADS

    // MEATS
    pepperoni.checked = false;
    ham.checked = false; 
    mortadella.checked = false;
    salami.checked = false;
    chicken.checked = false;
    nomeat.checked = false;
    // MEATS

    // CHEESES
    gouda.checked = false;
    monterey.checked = false;
    american.checked = false;
    mounster.checked = false;
    provolone.checked = false;
    nocheese.checked = false;
    // CHEESES

    // HERBS
    lettuce.checked = false;
    spinach.checked = false;
    pickles.checked = false;
    olives.checked = false; 
    jalapeno.checked = false; 
    noherbs.checked = false;
    // HERBS

    // CONDIMENTS
    salt.checked = false;
    pepper.checked = false;
    vinegar.checked = false;
    pickleJu.checked = false;
    garlic.checked = false;
    nocondiments.checked = false;
    // CONDIMENTS

// RESETS

});
// PART 2







//  PART 3
let date = document.querySelector('#date');
let nameStylist = document.querySelector('#nameStylist');
let shortHair = document.querySelector('#hairLength1');
let longHair = document.querySelector('#hairLength2');
let form3 = document.querySelector('#haircut-appointment')




form3.addEventListener('submit', function(){
    event.preventDefault();
    // console.log('stylist button');

    let hairlength = false;
    if (shortHair.checked === true) {
        hairlength = "Short";
    } else if (longHair.checked === true) {
        hairlength = "Long";
    }
// console.log(hairlength);
    
if (date.value === ''){
    alert('Please, input desired date.');
} if (shortHair.checked === false && longHair.checked === false){
    alert('Please, specify length of your hair.')
} if (nameStylist.value === ''){
    alert('Please, specify desired hair stylist.')
}  else {
    alert(`Haircut scheduled for ${date.value} with ${nameStylist.value} for ${hairlength} hair.`);
}
    

    date.value = '';
    nameStylist.value = '';
    shortHair.checked = true;

});


//  PART 4

let username = document.querySelector('#userName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#passwordConfirmation');
let form4 = document.querySelector('#createAccount');

form4.addEventListener('submit', function(event){
    event.preventDefault();

    // USERNAME STUFF

if(username.value.length < 3){
    alert('Username must be at least three characters long')
}

if(username.value !== '' && email.value !== '' && passwordConfirmation.value === password.value && username.value.length > 3 && password.value.length >= 4 && username.value !== password.value){
    alert(`User account ${username.value} has been created.`);
} else if (username.value === '') {
    alert('Please input a username.')
}

// IF USERNAME AND PASSWORD MATCH
if(username.value === password.value){
    alert('Username and Password cannot match');
}

// EMAIL

// for (let i = 0; i < email.length; i++){
//     if(email[i].indexOf("@") === -1 ){
//         alert('Enter an email type');
//     } 
// }

if(email.value === ''){
    alert('Please enter an email.');
}

//  PASSWORD CONFIRMATION
if(password.value.length < 4){
    alert('Password must be at least four characters.')
}
// IF PASSWORD AND CONFIRMATION DONT MATCH
if(passwordConfirmation.value !== password.value){
    alert("Passwords do not match.");
} 


//  RESETS
username.value = '';
email.value = '';
password.value = '';
passwordConfirmation.value = '';
//  RESETS

});