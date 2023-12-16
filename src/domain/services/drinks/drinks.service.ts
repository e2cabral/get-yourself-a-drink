import { Injectable } from '@nestjs/common';
import {GetDrinksQueryRequest} from "../../../main/queries/get-drinks/get-drinks.query.request";
import {QueryBus} from "@nestjs/cqrs";
import {GetDrinkByIdQueryRequest} from "../../../main/queries/get-drink-by-id/get-drink-by-id.query.request";

@Injectable()
export class DrinksService {
  constructor(private queryBus: QueryBus) {
  }
  async getDrinks(query: GetDrinksQueryRequest) {
    try {
      const {
        name, category, preparation,
        sort, offset, number
      } = query

      return this.queryBus.execute(
        new GetDrinksQueryRequest(
          name,
          category,
          preparation,
          sort ?? 'asc',
          number ?? 10,
          offset
        )
      )
    } catch (err) {
      throw err
    }
  }

  async getDrinkById(id: number) {
    try {
      return this.queryBus.execute(
        new GetDrinkByIdQueryRequest(id)
      )
    } catch (err) {
      throw err
    }
  }
}
