export class ToFavoriteCommandRequest {
  constructor(
    userId: number,
    drinkId: number
  ) {
    this.userId = userId
    this.drinkId = drinkId
  }
  userId: number
  drinkId: number
}