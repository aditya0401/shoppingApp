import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected() {
    console.log("onRecipeSelected");
    this.recipeservice.recipeselected.emit(this.recipe)
  }

}
