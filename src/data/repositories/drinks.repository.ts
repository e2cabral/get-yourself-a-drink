import {Inject, Injectable} from "@nestjs/common";
import {Drink} from "../../domain/models/drink.model";
import {GetDrinksQueryRequest} from "../../main/queries/get-drinks/get-drinks.query.request";
import {Like, Repository} from "typeorm";
import {DrinkEntity} from "../../infra/database/entity/drink.entity";

@Injectable()
export class DrinksRepository {
  constructor(@Inject('DRINKS_REPOSITORY') private repository: Repository<DrinkEntity>) {
  }
  async getDrinks(query: GetDrinksQueryRequest): Promise<Array<Drink>> {
    try {
      const { name, category, preparation } = query
      return this
        .repository
        .find({
          where: {
            name: Like(`%${name}%`),
            preparation: Like(`%${preparation}%`),
            category,
          },
          skip: (query.offset - 1) * query.number,
          take: query.number,
          order: { name: query.sort }
        })
    } catch (err) {
      throw err
    }
  }
}