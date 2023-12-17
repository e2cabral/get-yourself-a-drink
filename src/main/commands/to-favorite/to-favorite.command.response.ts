import {Drink} from "../../../domain/models/drink.model";
import {User} from "../../../domain/models/user.model";

export type ToFavoriteCommandResponse = User
export const ToFavoriteCommandResponse = (user: User) => {
  const {id, name, drinks} = user

  return new User(id, name, drinks)
}