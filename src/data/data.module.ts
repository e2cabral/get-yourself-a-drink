import { Module } from '@nestjs/common';
import {DrinksRepository} from "./repositories/drinks.repository";
import {InfraModule} from "../infra/infra.module";
import {FavoritesRepository} from "./repositories/favorites.repository";

@Module({
  imports: [InfraModule],
  providers: [DrinksRepository, FavoritesRepository],
  exports: [DrinksRepository, FavoritesRepository]
})
export class DataModule {}
