import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('nameAmount') nameAmountRef : ElementRef;

  @Output() AddIngredient = new EventEmitter<Ingredient>();



  constructor() {}

  ngOnInit(): void {
  }

  IngredientAdded(){
    const name:string = this.nameInputRef.nativeElement.value;
    const amount:number = this.nameAmountRef.nativeElement.value;

    const newIngredient = new Ingredient(name,amount);

    this.AddIngredient.emit(newIngredient);

  }

}
