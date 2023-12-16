import {Injectable} from "@nestjs/common";
import {Drink} from "../../domain/models/drink.model";
import {GetDrinksQueryRequest} from "../../main/queries/get-drinks/get-drinks.query.request";

@Injectable()
export class DrinksRepository {
  async getDrinks(query: GetDrinksQueryRequest): Promise<Array<Drink>> {
    return []
  }
}