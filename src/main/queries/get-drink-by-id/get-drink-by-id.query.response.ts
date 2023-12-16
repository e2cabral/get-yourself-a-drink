import {Ingredients} from "../../../domain/models/ingredients.model";
import {Drink} from "../../../domain/models/drink.model";

export type GetDrinkByIdQueryResponse = Drink
export const GetDrinkByIdQueryResponse = (drink: Drink) => {
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
}