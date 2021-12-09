import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

@ViewChild('f') slForm:NgForm;
  subscription : Subscription;
  isEditing = false;
  editItemIndex : number;
  editedItem : Ingredient;


  constructor(private slService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
        (index:number) =>{
          this.editItemIndex = index;
          this.isEditing = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
              name:this.editedItem.name,
              amount: this.editedItem.amount
          });
        }
    );
  }

  IngredientAdded(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);

    if(this.isEditing){
      this.slService.UpdateIngredient(this.editItemIndex, newIngredient);

      this.isEditing = false;
    }else{
      this.slService.addIngredients(newIngredient);
    }
    this.slForm.reset();
  }




  onClear(){
    this.slForm.reset();
    this.isEditing = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
