import { Module } from '@nestjs/common';
import { DrinksService } from './services/drinks/drinks.service';
import {CqrsModule} from "@nestjs/cqrs";
import { FavoritesService } from './services/favorites/favorites.service';

@Module({
  imports: [CqrsModule],
  providers: [DrinksService, FavoritesService],
  exports: [DrinksService]
})
export class DomainModule {}
