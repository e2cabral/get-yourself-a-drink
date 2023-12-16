import { Module } from '@nestjs/common';
import {CqrsModule, QueryBus} from "@nestjs/cqrs";
import {GetDrinksHandler} from "./queries/get-drinks/get-drinks.handler";
import {DataModule} from "../data/data.module";

@Module({
  imports: [CqrsModule, DataModule],
  providers: [GetDrinksHandler]
})
export class MainModule {}
