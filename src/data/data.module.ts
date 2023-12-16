import { Module } from '@nestjs/common';
import {DrinksRepository} from "./repositories/drinks.repository";

@Module({
  providers: [DrinksRepository],
  exports: [DrinksRepository]
})
export class DataModule {}
