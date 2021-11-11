import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipeFromList = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Zucchini slice Lorraine recipe",
                "Australia’s favourite savoury slice meets quiche Lorraine in this versatile recipe. You can eat it with a salad for lunch or dinner, snack on it cold, or pop into a lunch box. You can even cut into small pieces and serve warm for canapes.",
                "https://img.taste.com.au/aGIMN1rY/w643-h428-cfill-q90/taste/2021/08/zucchini-slice-lorraine-recipe-173409-1.jpg"),
    new Recipe("Easy Spanish chicken",
                "This satisfying and tasty meal is also surprisingly healthy and is suitable as a dinner for anyone following a diet of 1200–1500 calories a day.",
                "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_spanish_chicken_09987_16x9.jpg"),
    new Recipe("Middle Eastern-inspired chicken",
                "Looking for something quick and delicious to cook tonight? Or maybe you need something a little special? Whatever reason you’re cooking, try this easy recipe, made in 3 easy steps and ready in just 20 minutes. ",
                "https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipe:Recipe){
    this.selectedRecipeFromList.emit(recipe);
  }

}
