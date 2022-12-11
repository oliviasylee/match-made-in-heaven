var getFavorite = JSON.parse(localStorage.getItem('favRecipe'))

var favImg = document.querySelector("#favImg")
var favH1 = document.querySelector("#faveH1")
var favList = document.querySelector(".card-text")
var favLink = document.querySelector("#favLink")

var listItems = getFavorite.ingredients

//$(".favCard").attr("class", "favCard");
var list = $("<ul>")
$(".card-text").append(list)

var newArr = listItems.split(",")
console.log(newArr)
 for(var i = 0; i < newArr.length; i++) {
    var item = $("<li>")
    item.html(newArr[i]);
    list.append(item)
 }

 favImg.setAttribute("src", getFavorite.image)
 favH1.innerHTML = getFavorite.lable
 favLink.setAttribute("href", getFavorite.link)