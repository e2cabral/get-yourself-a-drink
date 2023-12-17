import {Drink} from "./drink.model";

export class User {
  constructor(
    id: number,
    name: string,
    drinks: Array<Drink>
  ) {
    this.id = id
    this.name = name
    this.drinks = drinks
  }
  id: number
  name: string
  drinks?: Array<Drink>
}