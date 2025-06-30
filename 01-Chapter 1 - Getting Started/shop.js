// For now, display a quick message in the console.
console.log("ClydeBank Coffee Shop is now open!")

//Our Inventory
let inventory = ["Regular Coffee", "Espresso", "Cappuccino", "Latte"]
let inventoryPrices = [3.00, 3.50, 4.00, 4.25]

//Obtain refrerence to the menu list by ID
let menuList = document.getElementById("coffee-menu")

//Loop through the inventory and create a list item for each coffee
function populateMenu(container) {
for (let i = 0; i < inventory.length; i++) {
    container.innerHTML += "<li>" + inventory[i] + " - $" + inventoryPrices[i].toFixed(2) + "</li>"
}
}

populateMenu(menuList)