import {Controller, Get, Param, Query} from '@nestjs/common';
import {GetDrinksQueryRequest} from "../../../main/queries/get-drinks/get-drinks.query.request";
import {DrinksService} from "../../../domain/services/drinks/drinks.service";
import {ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Drink} from "../../../domain/models/drink.model";
import {ResponseFactory} from "../../../infra/factory/response.factory";
import {InternalServerError} from "../../../infra/http/errors";

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
      const data = this.service.getDrinks(query)
      return ResponseFactory.onSuccess(data)
    } catch (err) {
      return ResponseFactory.onError(
        new InternalServerError(
          (err as Error).message
        )
      )
    }
  }

  @Get('/:id')
  @ApiTags('Drinks')
  async getById(@Param('id') id: number) {
    try {
      const data = this.service.getDrinkById(id)
      return ResponseFactory.onSuccess(data)
    } catch (err) {
      return ResponseFactory.onError(
        new InternalServerError(
          (err as Error).message
        )
      )
    }
  }
}
