import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeservice:RecipeService) { }
recipeDetails:Recipe;
  ngOnInit() {
    this.recipeservice.recipeselected.subscribe(
      (recipe:Recipe)=>{
        this.recipeDetails= recipe;
      }
    )
  }

  showRecipeDetails(event){
    this.recipeDetails= event;
    console.log("showRecipeDetails",event);
    
  }

}
