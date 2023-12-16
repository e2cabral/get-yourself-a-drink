import { Module } from '@nestjs/common';
import { DrinksService } from './services/drinks/drinks.service';
import {CqrsModule} from "@nestjs/cqrs";

@Module({
  imports: [CqrsModule],
  providers: [DrinksService],
  exports: [DrinksService]
})
export class DomainModule {}
