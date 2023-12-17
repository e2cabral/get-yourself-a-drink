import {DataSource} from "typeorm";
import {
  DrinksRepositoryProvider,
  FavoriteRepositoryProvider,
  UserRepositoryProvider
} from "./providers/drinks.repository.provider";

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
        synchronize: false,
      }).initialize()
    }
  }

  private static DrinksRepositoryProvider = DrinksRepositoryProvider()
  private static UserRepositoryProvider = UserRepositoryProvider()
  private static FavoriteRepositoryProvider = FavoriteRepositoryProvider()

  public static getProviders() {
    return [
      this.PostgresDataSource,
      this.DrinksRepositoryProvider,
      this.UserRepositoryProvider,
      this.FavoriteRepositoryProvider
    ]
  }
}