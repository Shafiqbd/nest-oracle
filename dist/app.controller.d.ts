import { MysqlService } from './services/mysql.service';
export declare class AppController {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    getHello(): Promise<any>;
}
