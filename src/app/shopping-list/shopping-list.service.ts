import { Subject } from 'rxjs';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService{

  ingredientsChanged  =  new Subject<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient("Apple",10),
    new Ingredient("Orange",3),
    new Ingredient("Banana",20),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  AddIngredientFromRecipe(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
