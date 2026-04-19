import { IRecipe } from "./recipes";

export const RecipesMock: IRecipe[] = [
  {
    id: 1,
    title: 'Brownie de chocolate',
    description: 'Brownie de chocolate da @phyyysalis',
    imageUrl: 'https://imgs.search.brave.com/uU3thbG0CgTwwr9HcU6JqRgjh0WnYpv74qGiMUrnzOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzMwLzQxLzQ2/LzM2MF9GXzE0MzA0/MTQ2NzFfNTNzS0k0/cTloMDhSWlNjTTVO/Y1FRdngyUlRLSmZl/U0suanBn',
    time: 50,
    ingredients: [
      '160g de chocolate ao leite',
      '100g de manteiga',
      '50g de açúcar mascavo',
      '25g de cacau em pó',
      '2 colheres de sopa de óleo',
      '3 ovos médios',
      '100g de açúcar branco',
      '50g de açúcar mascavo',
      '70g de farinha',
      '1 colher de chá de sal',
      '160g de chocolate ao leite picado',
    ],
    steps: [
      'Pré-aqueça o forno a 180°C',
      'Misture a primeira parte de chocolate, manteiga, açúcar, cacau e óleo',
      'Para a segunda parte, misture o resto dos ingredientes em outra vasilha',
      'Coloque junto as duas partes da massa, misturando bem',
      'Adicione a massa do brownie em uma forma untada',
      'Adicione chocolate picado por cima',
      'Asse por 25 a 30 minutos a 180°C',
    ],
    category: 'doce',
    rating: 5,
    isFavorite: true,
  },
];
