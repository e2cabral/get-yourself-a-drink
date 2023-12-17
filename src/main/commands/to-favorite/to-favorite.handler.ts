import {ICommandHandler, IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetDrinkByIdQueryRequest} from "../../queries/get-drink-by-id/get-drink-by-id.query.request";
import {GetDrinkByIdQueryResponse} from "../../queries/get-drink-by-id/get-drink-by-id.query.response";
import {FavoritesRepository} from "../../../data/repositories/favorites.repository";
import {ToFavoriteCommandRequest} from "./to-favorite.command.request";
import {ToFavoriteCommandResponse} from "./to-favorite.command.response";

@QueryHandler(GetDrinkByIdQueryRequest)
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