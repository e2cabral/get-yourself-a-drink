import { Injectable } from '@nestjs/common';
import {ToFavoriteCommandRequest} from "../../../main/commands/to-favorite/to-favorite.command.request";
import {CommandBus} from "@nestjs/cqrs";

@Injectable()
export class FavoritesService {
  constructor(private commandBus: CommandBus) {}
  async toFavorite(command: ToFavoriteCommandRequest) {
    try {
      const { userId, drinkId } = command

      return this.commandBus.execute(
        new ToFavoriteCommandRequest(
          userId,
          drinkId
        )
      )
    } catch (err) {
      throw err
    }
  }
}
