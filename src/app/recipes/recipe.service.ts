import { Recipe } from "./recipe.modal";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeselected= new EventEmitter<Recipe>();

    IngredientsToAdd:Ingredient[];
    private recipes: Recipe[]= [
        new Recipe('test recipe','test description','https://s.hdnux.com/photos/01/05/24/62/18173072/11/gallery_xlarge.jpg',
        [
            new Ingredient('Apples',5),
            new Ingredient('meat',5)
        ]),
        new Recipe('new recipe','new description','https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=2048x2048',
        [
            new Ingredient('Oranges',5),
            new Ingredient('Chicken',2)
        ])
      ];

      getRecipes(){
          return this.recipes;
      }

      //addToShoppingList= new EventEmitter<Ingredient[]>();
      addToList(ingredientsList){
        this.IngredientsToAdd= ingredientsList;
      }
}