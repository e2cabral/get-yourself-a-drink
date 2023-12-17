import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {DrinkEntity} from "../../infra/database/entity/drink.entity";
import {UserEntity} from "../../infra/database/entity/user.entity";

@Injectable()
export class FavoritesRepository {
  constructor(
    @Inject('DRINKS_REPOSITORY') private drinks: Repository<DrinkEntity>,
    @Inject('USERS_REPOSITORY') private users: Repository<UserEntity>
  ) {}

  async toFavorite(userId: number, drinkId: number) {
    const drink = await this
      .drinks
      .findOne({
        where: { id: drinkId }
      })

    const user = await this
      .users
      .findOne({
        where: { id: userId }
      })

    user.drinks.push(drink)

    return this.users.save(user)
  }
}