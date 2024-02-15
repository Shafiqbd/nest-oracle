import { MysqlService } from '../services/mysql.service';
export declare class IssueController {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    getExample(): Promise<any>;
}
