// mysql.service.ts
import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class MysqlService {
  private connection: any;

  constructor() {
    this.connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'nest-crud',
      connectionLimit: 10, // adjust as needed
    });
  }

  async query(sql: string, values?: any[]): Promise<any> {
    const [rows, fields] = await this.connection.execute(sql, values);
    return rows;
  }
}
