export declare class MysqlService {
    private connection;
    constructor();
    query(sql: string, values?: any[]): Promise<any>;
}
