//Display favorite recipes//
function getFavorite(){
var getFavorite = JSON.parse(localStorage.getItem('favRecipe'))

var favImg = document.querySelector("#favImg")
var favH1 = document.querySelector("#favH1")
//var favList = document.querySelector(".card-text")
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
 favH1.innerHTML = getFavorite.label
 favLink.setAttribute("href", getFavorite.link)
}

getFavorite();

//Display favorite drink//
function getFavDrink(){
 var getFavDrink = JSON.parse(localStorage.getItem('favDrink'))

 var favDrinkImg = document.querySelector("#favDrinkImg")
 var favDrinkH1 = document.querySelector("#favDrinkH1")
 //var favDrinkList = document.querySelector(".card-drink-text")

 var listDrinkItems = getFavDrink.ingredientsDrink

 var listDrink = $("<ul>")
 $(".card-drink-text").append(listDrink)

 var newDrinkArr = listDrinkItems.split(",")
 console.log(newDrinkArr)
   for(var i = 0; i < newDrinkArr.length; i++) {
      var itemDrink = $("<li>")
      itemDrink.html(newDrinkArr[i]);
      listDrink.append(itemDrink)
   }
   
favDrinkImg.setAttribute("src", getFavDrink.imgDrink)
favDrinkH1.innerHTML = getFavDrink.labelDrink
}

getFavDrink();