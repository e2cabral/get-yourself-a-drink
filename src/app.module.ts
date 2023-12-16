import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { MainModule } from './main/main.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [PresentationModule, MainModule, DomainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
