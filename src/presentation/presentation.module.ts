import { Module } from '@nestjs/common';
import { HealthcheckController } from './controllers/common/healthcheck.controller';
import {TerminusModule} from "@nestjs/terminus";
import {HttpModule} from "@nestjs/axios";
import { DrinksController } from './controllers/drinks/drinks.controller';
import {DomainModule} from "../domain/domain.module";

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    DomainModule
  ],
  controllers: [HealthcheckController, DrinksController]
})
export class PresentationModule {}
