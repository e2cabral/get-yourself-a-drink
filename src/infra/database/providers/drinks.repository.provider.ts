import {DataSource} from "typeorm";
import {DrinkEntity} from "../entity/drink.entity";
import {UserEntity} from "../entity/user.entity";
import {FavoriteEntity} from "../entity/favorite.entity";

export const DrinksRepositoryProvider = () => ({
  provide: 'DRINKS_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DrinkEntity),
  inject: ['POSTGRES_DATA_SOURCE']
})

export const UserRepositoryProvider = () => ({
  provide: 'USERS_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
  inject: ['POSTGRES_DATA_SOURCE']
})

export const FavoriteRepositoryProvider = () => ({
  provide: 'FAVORITE_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FavoriteEntity),
  inject: ['POSTGRES_DATA_SOURCE']
})