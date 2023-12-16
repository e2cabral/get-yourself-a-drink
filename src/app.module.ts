import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { MainModule } from './main/main.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [PresentationModule, MainModule, DomainModule, DataModule, InfraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
