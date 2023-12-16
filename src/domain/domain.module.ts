import { Module } from '@nestjs/common';
import { DrinksService } from './services/drinks/drinks.service';

@Module({
  providers: [DrinksService]
})
export class DomainModule {}
