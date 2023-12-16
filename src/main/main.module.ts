import { Module } from '@nestjs/common';
import {CqrsModule, QueryBus} from "@nestjs/cqrs";
import {GetDrinksHandler} from "./queries/get-drinks/get-drinks.handler";
import {DataModule} from "../data/data.module";
import {GetDrinkByIdHandler} from "./queries/get-drink-by-id/get-drink-by-id.handler";

@Module({
  imports: [CqrsModule, DataModule],
  providers: [GetDrinksHandler, GetDrinkByIdHandler]
})
export class MainModule {}
