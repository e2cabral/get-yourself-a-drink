import { Module } from '@nestjs/common';
import { HealthcheckController } from './controllers/common/healthcheck.controller';
import {TerminusModule} from "@nestjs/terminus";
import {HttpModule} from "@nestjs/axios";
import { DrinksController } from './controllers/drinks/drinks.controller';

@Module({
  imports: [
    TerminusModule,
    HttpModule
  ],
  controllers: [HealthcheckController, DrinksController]
})
export class PresentationModule {}
