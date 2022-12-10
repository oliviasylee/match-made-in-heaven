var getFavorite = JSON.parse(localStorage.getItem('favRecipe'))

var favImg = document.querySelector("#favImg")
var favH1 = document.querySelector("#faveH1")
var favList = document.querySelector("#favList")
var favLink = document.querySelector("#favLink")

var listItems = getFavorite.ingredients

var newArr = listItems.split(",")
console.log(newArr)
 for(let i = 0; i < newArr.length; i++) {
    let listItem = document.createElement("li")
    var ingredientList = listItem.append(newArr[i])
    console.log(ingredientList)
 }

favImg.setAttribute("src", getFavorite.image)
favH1.innerHTML = getFavorite.lable
favList.append(getFavorite.ingredients)
favLink.setAttribute("href", getFavorite.link)