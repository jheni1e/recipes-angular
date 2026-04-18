import { Component, Input } from '@angular/core';
import { RecipesMock } from '../../models/recipes.mock';
import { CommonModule } from '@angular/common';
import { IRecipe } from '../../models/recipes';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipes: IRecipe[] = [];

  constructor() {
    this.recipes = RecipesMock;
  }
}
