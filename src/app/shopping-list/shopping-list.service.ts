import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    private ingredients: Ingredient[]= [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

      getIngredientsList(){
          return this.ingredients;
      }

      //ingredientAdded= new EventEmitter<Ingredient>();

      addtoIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
      }
}