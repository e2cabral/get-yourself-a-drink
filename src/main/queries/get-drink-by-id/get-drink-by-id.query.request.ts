import {ApiProperty} from "@nestjs/swagger";

export class GetDrinkByIdQueryRequest {
  constructor(
    id: number,
  ) {
    this.id = id
  }

  @ApiProperty({ example: 1, description: 'The id of the drink' })
  public id: number
}