import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName',{static:false}) ingNameRef: ElementRef;
  @ViewChild('ingredientAmount',{static:false}) ingAmountRef: ElementRef;
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
  }

  AddToLIst(){
    const ingName= this.ingNameRef.nativeElement.value;
    const ingAmount= this.ingAmountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.shoppinglistservice.addtoIngredients(newIngredient);
  }

}
