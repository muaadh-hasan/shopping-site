import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() itemRecipeSelected = new EventEmitter<void>();

  @Input() recipe! : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(){
    console.log("Here item is clicked");
    this.itemRecipeSelected.emit();
  }

}
