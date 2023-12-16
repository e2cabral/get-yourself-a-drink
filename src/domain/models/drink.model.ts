import {Ingredients} from "./ingredients.model";

export class Drink {
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