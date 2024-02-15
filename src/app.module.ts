import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlService } from './services/mysql.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MysqlService],
})
export class AppModule {}
