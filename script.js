let namePlaceholder = document.getElementById('randomName');

let firstNames = ['Johnny','Timothy','Reiner','Adam','Ken','Sam','Jeff'];

let lastNames = ['Joestar','Keith','Braun','Kruger','Tybur','Ben','Richie'];

function generateName(){

    let firstNamePicker = Math.floor(Math.random()*Math.floor(firstNames.length));

    let lastNamePicker = Math.floor(Math.random()*Math.floor(lastNames.length));

    let randomName = [];

    randomName.push(firstNames[firstNamePicker]);

    randomName.push(lastNames[lastNamePicker]);

    namePlaceholder.value = randomName.join().replace(/,/g, " ");

}