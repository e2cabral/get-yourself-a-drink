import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetDrinksQueryRequest} from "./get-drinks.query.request";

@QueryHandler(GetDrinksQueryRequest)
export class GetDrinksHandler implements IQueryHandler<GetDrinksQueryRequest> {
  execute(query: GetDrinksQueryRequest): Promise<any> {
    return Promise.resolve(undefined);
  }
  
}