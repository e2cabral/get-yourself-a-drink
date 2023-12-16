import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetDrinkByIdQueryRequest} from "./get-drink-by-id.query.request";
import {DrinksRepository} from "../../../data/repositories/drinks.repository";
import {GetDrinkByIdQueryResponse} from "./get-drink-by-id.query.response";

@QueryHandler(GetDrinkByIdQueryRequest)
export class GetDrinkByIdHandler implements IQueryHandler<GetDrinkByIdQueryRequest> {
  constructor(private repository: DrinksRepository) {
  }
  async execute(query: GetDrinkByIdQueryRequest): Promise<GetDrinkByIdQueryResponse> {
    try {
      const drink = await this.repository.getDrinkById(query)
      return GetDrinkByIdQueryResponse(drink)
    } catch (err) {
      throw err
    }
  }
  
}