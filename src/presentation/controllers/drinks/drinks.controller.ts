import {Controller, Get, Param, Query} from '@nestjs/common';
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
    type: [Drink],
  })
  async getDrinks(@Query() query: GetDrinksQueryRequest) {
    try {
      return this.service.getDrinks(query)
    } catch (err) {
      throw err
    }
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    try {
      return this.service.getDrinkById(id)
    } catch (err) {
      throw err
    }
  }
}
