import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Buffalo blue burger', 'Our signature burger is topped with Medium sauce and a generous amount of blue cheese dressing and crumbles. Served with french fries.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPsikbNkmHcZx7pJ6EnQgk9bX6aR9cCuNjTmi-ns1KWHqXUiknQ',
     [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 20)
     ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Italian Pizza', 'Like the rest of Italian food, Italian pizza is best—and most authentic—when it’s made with fresh, local ingredients, especially any that are DOP. We’re not talking the microwaved dough and synthetic cheese that you see now both in Italy and abroad, but something completely different.', 'https://i1.wp.com/www.walksofitaly.com/blog/wp-content/uploads/2013/01/DSC_0021.jpg?resize=300%2C199&ssl=1',
    [
      new Ingredient('Ham', 7),
      new Ingredient('Cheese', 2)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  constructor(private slService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
