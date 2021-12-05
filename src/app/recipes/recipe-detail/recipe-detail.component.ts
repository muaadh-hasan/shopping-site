import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private slService:ShoppingListService) {}

  ngOnInit(): void {
  }

  toAddIngredientstoShoppingList(){
    this.slService.AddIngredientFromRecipe(this.recipe.ingredients);
  }

}
