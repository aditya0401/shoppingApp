import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetails;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("recipeDetails", this.recipeDetails);    
  }

  addToShoppingList(){
    this.recipeService.addToList(this.recipeDetails.ingredients);
  }

}
