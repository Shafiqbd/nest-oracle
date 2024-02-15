import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MysqlService } from './services/mysql.service';

@Controller()
export class AppController {
  constructor(private readonly mysqlService: MysqlService) {}

  @Get()
  async getHello(): Promise<any> {
    const results = await this.mysqlService.query('SELECT * FROM users');
    console.log('results', results);
    return results;
  }
}
