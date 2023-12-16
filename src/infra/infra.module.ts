import { Module } from '@nestjs/common';
import {Database} from "./database/database";

@Module({
  providers: [...Database.getProviders()],
  exports: [...Database.getProviders()]
})
export class InfraModule {}
