export interface IRecipe
{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    time: number;
    ingredients: string[];
    steps: string[];
    category?: string;
    rating?: number;
    isFavorite?: boolean;
}
