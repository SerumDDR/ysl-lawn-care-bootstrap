/*
    Student Name: Donnie
    File Name: script.js
    Date: 11/23/2024
*/

//Global variables
var figElement = document.getElementById("placeholder");
var imgSource = document.getElementById("image");
var figCap = document.getElementById("gal-text");
const mowing_PRICE = 35
const decor_PRICE = 50
const yardClean_PRICE = 20
const SALES_TAX = 0.0825

//jQuery for hero image to consume the header window space
$(document).ready(function(){
	$('.hero').height($(window).height());
});

//Function to display the first picture
function pic1() {
    imgSource.src = "images/after-back-white-house.jpeg";
    imgSource.alt = "clean fresh mowed striped grass backyard";
    figElement.style.display = "block";
    figCap.innerText = "Stripe Design";
}

//Function to display second image
function pic2() {
	imgSource.src = "images/after-wavy-yard-design.jpeg"
	imgSource.alt = "mowed grass wavy design";
    figElement.style.display = "block";
    figCap.textContent = "Wavy Design";
}

//Function to display third image
function pic3() {
	imgSource.src = "images/after-trimmed-front-yard.jpeg"
	imgSource.alt = "mowed grass trimmed walkway";
    figElement.style.display = "block";
    figCap.textContent = "Walkway Installation";
}

//Function to display fourth image
function pic4() {
    imgSource.src = "images/after-backyard.jpeg";
    imgSource.alt = "clean fresh mowed backyard";
    figElement.style.display = "block";
    figCap.textContent = "Spring Special";
}

//Function to display fifth image
function pic5() {
	imgSource.src = "images/after-ac-side-house.jpeg"
	imgSource.alt = "after image of complex edge and trim";
    figElement.style.display = "block";
    figCap.textContent = "Custom Special";
}

//Function to display sixth image
function pic6() {
	imgSource.src = "images/striped-back-yard.jpeg"
	imgSource.alt = "Mowed yard with stripe design";
    figElement.style.display = "block";
    figCap.textContent = "Fall Special";
}

//Function to display seventh image
function pic7() {
    imgSource.src = "images/christmas-decor-front-lawn4.jpg";
    imgSource.alt = "christmas decoration setup lights and blow-ups";
    figElement.style.display = "block";
    figCap.textContent = "Christmas Paradise";
}

//Function to display eighth image
function pic8() {
	imgSource.src = "images/purple-blue-halloween-decor.png"
	imgSource.alt = "purple and blue halloween lights and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Light";
}

//Function to display ninth image
function pic9() {
	imgSource.src = "images/halloween-decor-orange-lights.jpg"
	imgSource.alt = "light of orange halloween and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Dark";
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 
// write code for total cost of services for id mowing, decor, and yardClean and display cost in id total
function totalCost() {
    let cost = 0;
    let mowing = document.getElementById("mowing").checked;
    let outsideDecor = document.getElementById("outside-decor").checked;
    let yardClean = document.getElementById("yard-clean").checked;

    cost += outsideDecor ? decor_PRICE : 0;
    cost += yardClean ? yardClean_PRICE : 0;
    cost += mowing ? mowing_PRICE : 0;

    document.getElementById("lawnTotal").innerHTML = formatCurrency(cost);

    let tax = cost * SALES_TAX;
    document.getElementById("lawnTax").innerHTML = formatCurrency(tax);

    let totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

document.getElementById("mowing").addEventListener("click", totalCost);
document.getElementById("outside-decor").addEventListener("click", totalCost);
document.getElementById("yard-clean").addEventListener("click", totalCost);