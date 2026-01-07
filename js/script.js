/*
Name: Brenda Madrigal
Date: 01/22/2025
CS 133J
Week 02 / Lab 02 
Description: This script updates the greeting and image dynamically.
*/

document.getElementById('theDate').innerText = new Date().toLocaleString();

document.getElementById('btnGreetMe').addEventListener('click', function() {
    document.getElementById('theGreeting').innerText = 'Coffee Day!';
});

document.getElementById('btnChangePic').addEventListener('click', function() {
    let img = document.getElementById('coffeeImage');
    img.src = 'img/coffee03.png';
    img.alt = 'A different cup of coffee';
});