import {Inject, Injectable} from "@nestjs/common";
import {Drink} from "../../domain/models/drink.model";
import {GetDrinksQueryRequest} from "../../main/queries/get-drinks/get-drinks.query.request";
import {Like, Repository} from "typeorm";
import {DrinkEntity} from "../../infra/database/entity/drink.entity";
import {GetDrinkByIdQueryRequest} from "../../main/queries/get-drink-by-id/get-drink-by-id.query.request";

@Injectable()
export class DrinksRepository {
  constructor(@Inject('DRINKS_REPOSITORY') private repository: Repository<DrinkEntity>) {
  }
  async getDrinks(query: GetDrinksQueryRequest): Promise<Array<Drink>> {
    try {
      const { name, category, preparation } = query

      const where = {name: null,preparation: null,category: null}

      if (name) where.name = Like(`%${name}%`)
      if (preparation) where.preparation = Like(`%${preparation}%`)
      if (category) where.category = category

      return this
        .repository
        .find({
          where,
          skip: (query.offset - 1) * query.number,
          take: query.number,
          order: { name: query.sort }
        })
    } catch (err) {
      throw err
    }
  }

  async getDrinkById(query: GetDrinkByIdQueryRequest): Promise<Drink> {
    try {
      return this
        .repository
        .findOneBy({ id: query.id })
    } catch (err) {
      throw err
    }
  }
}