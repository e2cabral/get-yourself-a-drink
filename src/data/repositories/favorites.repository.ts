import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {FavoriteEntity} from "../../infra/database/entity/favorite.entity";

@Injectable()
export class FavoritesRepository {
  constructor(
    @Inject('FAVORITE_REPOSITORY') private favorite: Repository<FavoriteEntity>
  ) {}

  async toFavorite(userId: number, drinkId: number) {
    try {
      return this.favorite.save({ userId, drinkId })
    } catch (err) {
      throw err
    }
  }
}