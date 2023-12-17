import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {DrinkEntity} from "../../infra/database/entity/drink.entity";
import {UserEntity} from "../../infra/database/entity/user.entity";
import {FavoriteEntity} from "../../infra/database/entity/favorite.entity";

@Injectable()
export class FavoritesRepository {
  constructor(
    @Inject('FAVORITE_REPOSITORY') private favorite: Repository<FavoriteEntity>
  ) {}

  async toFavorite(userId: number, drinkId: number) {
    try {
      const data = await this.favorite.save({ userId, drinkId })
      return data
    } catch (err) {
      throw err
    }
  }
}