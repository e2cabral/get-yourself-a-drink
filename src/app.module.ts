import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { MainModule } from './main/main.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PresentationModule, MainModule, DomainModule, DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
