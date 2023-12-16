import {Ingredients} from "../../../domain/models/ingredients.model";
import {Drink} from "../../../domain/models/drink.model";

export type GetDrinksQueryResponse = Array<Drink>
export const GetDrinksQueryResponse = (drinks: Array<Drink>) => {
  return drinks.map((drink) => {
    const {
      id, image, name,
      preparation, ingredients,
      category
    } = drink

    return new Drink(
      id, name, category,
      preparation, image,
      ingredients
    )
  })
}