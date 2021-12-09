import { Subject } from 'rxjs';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService{

  ingredientsChanged  =  new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients:Ingredient[] = [
    new Ingredient("Apple",10),
    new Ingredient("Orange",3),
    new Ingredient("Banana",20),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  AddIngredientFromRecipe(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  UpdateIngredient(index:number, ingredient: Ingredient){
    this.ingredients[index] =ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
