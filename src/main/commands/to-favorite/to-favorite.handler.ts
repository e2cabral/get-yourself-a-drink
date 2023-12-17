import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {FavoritesRepository} from "../../../data/repositories/favorites.repository";
import {ToFavoriteCommandRequest} from "./to-favorite.command.request";
import {ToFavoriteCommandResponse} from "./to-favorite.command.response";

@CommandHandler(ToFavoriteCommandRequest)
export class ToFavoriteHandler implements ICommandHandler<ToFavoriteCommandRequest> {
  constructor(private repository: FavoritesRepository) {
  }
  async execute(command: ToFavoriteCommandRequest): Promise<ToFavoriteCommandResponse> {
    try {
      const { userId, drinkId } = command
      const user = await this.repository.toFavorite(userId, drinkId)
      return ToFavoriteCommandResponse(user)
    } catch (err) {
      throw err
    }
  }

}