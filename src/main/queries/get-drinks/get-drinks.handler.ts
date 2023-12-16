import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetDrinksQueryRequest} from "./get-drinks.query.request";
import {DrinksRepository} from "../../../data/repositories/drinks.repository";
import {GetDrinksQueryResponse} from "./get-drinks.query.response";

@QueryHandler(GetDrinksQueryRequest)
export class GetDrinksHandler implements IQueryHandler<GetDrinksQueryRequest> {
  constructor(private repository: DrinksRepository) {
  }
  async execute(query: GetDrinksQueryRequest): Promise<GetDrinksQueryResponse> {
    try {
      const drinks = await this.repository.getDrinks(query)
      return GetDrinksQueryResponse(drinks)
    } catch (err) {
      throw err
    }
  }
  
}