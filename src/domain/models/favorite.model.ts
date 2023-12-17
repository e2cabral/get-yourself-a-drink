import {User} from "./user.model";
import {Drink} from "./drink.model";
import {ApiProperty} from "@nestjs/swagger";

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

  @ApiProperty({ example: 1, description: 'The unique id of the user' })
  userId: number

  @ApiProperty({ example: 1, description: 'The unique id of the drink' })
  drinkId: number
  users?: Array<User>
  drinks?: Array<Drink>
}