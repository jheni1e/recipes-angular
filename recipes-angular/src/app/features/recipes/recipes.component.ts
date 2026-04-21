import { Component, Input } from '@angular/core';
import { RecipesMock } from '../../models/recipes.mock';
import { CommonModule } from '@angular/common';
import { IRecipe } from '../../models/recipes';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipes: IRecipe[] = [];

  constructor() {
    this.recipes = RecipesMock;
  }
}
