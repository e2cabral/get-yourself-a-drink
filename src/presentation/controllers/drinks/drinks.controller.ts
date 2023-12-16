import {Controller, Get, Query} from '@nestjs/common';
import {GetDrinksQueryRequest} from "../../../main/queries/get-drinks/get-drinks.query.request";
import {DrinksService} from "../../../domain/services/drinks/drinks.service";

@Controller('drinks')
export class DrinksController {
  constructor(private service: DrinksService) {
  }
  @Get('/')
  async getDrinks(@Query() query: GetDrinksQueryRequest) {
    try {
      return this.service.getDrinks(query)
    } catch (err) {
      throw err
    }
  }
}
