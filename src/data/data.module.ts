import { Module } from '@nestjs/common';
import {DrinksRepository} from "./repositories/drinks.repository";
import {InfraModule} from "../infra/infra.module";

@Module({
  imports: [InfraModule],
  providers: [DrinksRepository],
  exports: [DrinksRepository]
})
export class DataModule {}
