import {User} from "./user.model";
import {Drink} from "./drink.model";

export class Favorite {
  constructor(
    userId: number,
    drinkId: number,
    users?: Array<User>,
    drinks?: Array<Drink>,
  ) {
    this.userId = userId
    this.drinkId = drinkId
    this.users = users
    this.drinks = drinks
  }
  userId: number
  drinkId: number
  users?: Array<User>
  drinks?: Array<Drink>
}