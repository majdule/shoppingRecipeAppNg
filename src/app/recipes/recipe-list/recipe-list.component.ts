import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Italian Pizza', 'Like the rest of Italian food, Italian pizza is best—and most authentic—when it’s made with fresh, local ingredients, especially any that are DOP. We’re not talking the microwaved dough and synthetic cheese that you see now both in Italy and abroad, but something completely different.', 'https://i1.wp.com/www.walksofitaly.com/blog/wp-content/uploads/2013/01/DSC_0021.jpg?resize=300%2C199&ssl=1')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
