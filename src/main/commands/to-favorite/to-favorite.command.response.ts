import {Favorite} from "../../../domain/models/favorite.model";

export type ToFavoriteCommandResponse = Favorite
export const ToFavoriteCommandResponse = (user: Favorite) => {
  const {drinks, users, userId, drinkId} = user

  return new Favorite(userId, drinkId, users, drinks)
}