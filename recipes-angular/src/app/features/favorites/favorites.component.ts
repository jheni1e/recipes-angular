import { Component } from '@angular/core';
import { IRecipe } from '../../models/recipes';
import { RecipesMock } from '../../models/recipes.mock';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites: IRecipe[] = [];

  constructor() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = RecipesMock.map(r => ({
      ...r,
      stars: Array(r.rating).fill(0)
    }));
  }
}
