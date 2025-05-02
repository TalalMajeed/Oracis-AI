declare module 'oracledb' {
  export interface Pool {
    getConnection(): Promise<Connection>;
    close(): Promise<void>;
  }

  export interface Connection {
    execute(sql: string, params?: any): Promise<any>;
    close(): Promise<void>;
  }

  export function createPool(config: any): Promise<Pool>;
  export function getConnection(): Promise<Connection>;
  export function getPool(): Pool;
} 