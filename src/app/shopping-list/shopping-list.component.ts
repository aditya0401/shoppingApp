import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Recipe } from '../recipes/recipe.modal';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[];
  constructor(private shoppinglistservice: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.ingredients= this.shoppinglistservice.getIngredientsList();
    if(this.recipeService.IngredientsToAdd.length != 0){
      this.ingredients= this.ingredients.concat(this.recipeService.IngredientsToAdd);
    }
    
  }

  AddToIngredients(ingredient){
    this.ingredients.push(ingredient);
  }
}
