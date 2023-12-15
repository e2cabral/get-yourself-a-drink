import { Module } from '@nestjs/common';
import { HealthcheckController } from './controllers/common/healthcheck.controller';
import {TerminusModule} from "@nestjs/terminus";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [
    TerminusModule,
    HttpModule
  ],
  controllers: [HealthcheckController]
})
export class PresentationModule {}
