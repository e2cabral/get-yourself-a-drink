import {Ingredients} from "../../../domain/models/ingredients.model";

export class GetDrinksQueryResponse {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public preparation: string,
    public image: string,
    public ingredients: Array<Ingredients>
  ) {
  }
}