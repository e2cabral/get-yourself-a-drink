import {Controller, Param, Post} from '@nestjs/common';
import {FavoritesService} from "../../../domain/services/favorites/favorites.service";
import {ResponseFactory} from "../../../infra/factory/response.factory";
import {InternalServerError} from "../../../infra/http/errors";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Favorite} from "../../../domain/models/favorite.model";

@Controller('favorite')
export class FavoritesController {
  constructor(private service: FavoritesService) {}

  @Post('/:userId/:drinkId')
  @ApiTags('Favorite')
  @ApiResponse({
    status: 200,
    type: Favorite,
  })
  async toFavorite(
    @Param('userId') userId: number,
    @Param('drinkId') drinkId: number,
  ) {
    try {
      const data = await this.service.toFavorite({ userId, drinkId })
      return ResponseFactory.onSuccess(data)
    } catch (err) {
      return ResponseFactory.onError(
        new InternalServerError(
          (err as Error).message
        )
      )
    }
  }

}
