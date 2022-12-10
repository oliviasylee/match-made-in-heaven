//javascript code goes here
function getDrink() { 
var getDrink = $('#get-drink'); // remove if not used
var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

//displays the drink recipe card 
$(".drinkCard").attr("class", "drinkCard");

  //Drink URL with random drinks  
  var randomDrink = fetch(queryURLdrink)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
      
      console.log(data.drinks[0].strDrink)
      console.log(data.drinks[0].strDrinkThumb)

      var list = $("<ul>");
      $(".drinkCard-text").append(list);


    //For loop looping through and appending each drink unit of measure and ingredient//
      for (var i = 1; i < 16; i++) {
        var item = $("<li>")
        ingredient = data.drinks[0]["strIngredient" + i];
        unit = data.drinks[0]["strMeasure" + i];
        if (ingredient){
            item.html(unit + " " + ingredient);
            list.append(item)
        }
    }

        //Getting the drink instructions and appending them to the drink card//
        var p = $("<p>");
        p.html("<h5>Instructions:</h5> \n" + data.drinks[0].strInstructions);
        $(".drinkCard-text").append(p);

        var title = $(".drinkCard-title");
        title.text(data.drinks[0].strDrink);

        var drinkimg = $(".drinkCard-img-top")
        drinkimg.attr("src", data.drinks[0].strDrinkThumb)


  });
};


$('#get-drink').click(function(){
  // check if drink card already exists
  if ($(".drinkcard")) {
      // if it does, remove it so we can replace it
      $( ".drinkcard" ).remove();
      }
// run getDrink() function
getDrink();
});

var initialDrinks = JSON.parse(localStorage.getItem("favoriteDrinks"))

if (!initialDrinks) {
  localStorage.setItem("favoriteDrinks", JSON.stringify([]))
}

$('#save-drink').click(function () {
  var drinksFromLS = JSON.parse(localStorage.getItem("favoriteDrinks"))

  // here yopu'll gather all of the info from the drink card
  var drinkTitle = $("#drinkCard-title")[0].innerText
  var drinkImage = $("#drinkCard-img-top").attr("src")
  var p = $("#drinkCard-text")[0].innerText

console.log(drinkImage)
// here, you'll build your object
  const favouriteDrinkObject = {
    drinkTitle, // same as --> drinkTitle: drinkTitle
    drinkImage,
    p,
  }

  drinksFromLS.push(favouriteDrinkObject)

  localStorage.setItem("favoriteDrinks",JSON.stringify(drinksFromLS))


})


