// your.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MysqlService } from '../services/mysql.service';

@Controller('issue')
export class IssueController {
  constructor(private readonly mysqlService: MysqlService) {}

  @Get()
  async getExample(): Promise<any> {
    // const results = await this.mysqlService.query('SELECT * FROM users');
    // console.log('results', results);
    return 'Test';
  }
}
