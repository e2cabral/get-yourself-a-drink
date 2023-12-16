import {Controller, Get, Query} from '@nestjs/common';
import {GetDrinksQueryRequest} from "../../../main/queries/get-drinks/get-drinks.query.request";
import {DrinksService} from "../../../domain/services/drinks/drinks.service";
import {ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Drink} from "../../../domain/models/drink.model";

@Controller('drinks')
export class DrinksController {
  constructor(private service: DrinksService) {
  }
  @Get('/')
  @ApiTags('Drinks')
  @ApiResponse({
    status: 200,
    description: 'The random recipe has been successfully retrieved.',
    type: [Drink],
  })
  async getDrinks(@Query() query: GetDrinksQueryRequest) {
    try {
      return this.service.getDrinks(query)
    } catch (err) {
      throw err
    }
  }
}
