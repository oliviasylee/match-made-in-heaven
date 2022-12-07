//javascript code goes here
var getDrink = $('#save-drink');
var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

//displays the drink recipe card 
$(".drinkCard").attr("class", "drinkCard");

  //Drink URL with random drinks  
  var randomDrink = fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
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




