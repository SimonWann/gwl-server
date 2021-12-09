import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Article } from './article.controller'
import { Profile } from './profile.controller'

@Module({
  imports: [],
  controllers: [AppController, Article, Profile],
  providers: [AppService],
})
export class AppModule {}
