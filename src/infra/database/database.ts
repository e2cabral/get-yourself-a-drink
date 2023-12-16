import {DataSource} from "typeorm";
import {DrinksRepositoryProvider} from "./providers/drinks.repository.provider";

export class Database {
  private static PostgresDataSource = {
    provide: 'POSTGRES_DATA_SOURCE',
    useFactory: async () => {
      return new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'get_yourself_a_database',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }).initialize()
    }
  }

  private static DrinksRepositoryProvider = DrinksRepositoryProvider()

  public static getProviders() {
    return [this.PostgresDataSource, this.DrinksRepositoryProvider]
  }
}