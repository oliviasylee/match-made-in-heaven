const id = "a1c66eff"
const key = "5a29b2fc6a3634e9526e19cffc59cf8b"

function getRecipe() {
    //Getting the value of the user specified cuisine type//
    var userPick= $("input[name=selector]:checked").val();

    //Recipe URL with user specified cuisine type//
    var recipeUrl = "https://api.edamam.com/search?q=" + userPick    + "&app_id=" + id + "&app_key=" + key + "&from=0&to=50";
    console.log(recipeUrl)
    fetch(recipeUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(recipeUrl);
        console.log(data);
    
        $("html, body").animate({ scrollTop: "1300px" }, 1000);

        //Displaying the recipe card//
        $(".foodCard").attr("class", "foodCard");
        
        var random = Math.floor((Math.random() * data.hits.length));
        console.log(data.hits.length);

        //Getting and appending the recipe title on the page//
        $(".card-title").html(data.hits[random].recipe.label);
        $(".card-text").text("Ingredient");
       
        var list = $("<ul>")
        $(".card-text").append(list)

        //For loop to loop through the ingredient list and append them to the page//
        for (var i=0; i< data.hits[random].recipe.ingredientLines.length; i++) {
            var item = $("<li>")
            item.html(data.hits[random].recipe.ingredientLines[i]);
            list.append(item)
        }

        //Getting and appending the recipe image and link to the recipe//
        $(".card-img-top").attr("src", data.hits[random].recipe.image);
        $("#get-recipe-link").attr("href", data.hits[random].recipe.url);

        //Saving user speicified recipes to local storage//
        var saveButton = document.querySelector("#save-recipe");

        saveButton.addEventListener("click", function(event) {
        event.preventDefault();
 
        var labelInput = document.querySelector(".card-title");
        var imageInput = document.querySelector(".card-img-top").src;
        var ingredientsInput = document.querySelector(".card-text");
        var linkInput = document.querySelector("#get-recipe-link").href;

        let savedRecipes = {
            lable: labelInput.innerHTML,
            image: imageInput,
            ingredients: ingredientsInput.textContent,
            link: linkInput
        };
        console.log(savedRecipes)
        localStorage.setItem('favRecipe' , JSON.stringify(savedRecipes));
    });

    });
}

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

    $(function(){
        $('#get-recipe').click(function(){
            getRecipe();
        });
      });