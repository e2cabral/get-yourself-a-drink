import {DataSource} from "typeorm";
import {DrinkEntity} from "../entity/drink.entity";

export const DrinksRepositoryProvider = () => ({
  provide: 'DRINKS_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DrinkEntity),
  inject: ['POSTGRES_DATA_SOURCE']
})