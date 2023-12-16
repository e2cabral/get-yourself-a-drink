import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class GetDrinksQueryRequest {
  constructor(
    name?: string,
    category?: string,
    preparation?: string,
    sort?: 'asc' | 'desc',
    number?: number,
    offset?: number
  ) {
    this.name = name
    this.category = category
    this.preparation = preparation
    this.sort = sort
    this.number = number
    this.offset = offset
  }

  @ApiPropertyOptional({ example: 'Wine', description: 'The name of the drink' })
  public name?: string

  @ApiPropertyOptional({ example: 'Wine', description: 'The category of the drink' })
  public category?: string

  @ApiPropertyOptional({
    example: 'Remove the cover and fill the cup',
    description: 'The preparation method'
  })
  public preparation?: string

  @ApiPropertyOptional({ example: 'asc', description: 'The sort direction' })
  public sort?: 'asc' | 'desc'

  @ApiPropertyOptional({ example: 10, description: 'The number of records to be returned' })
  public number?: number

  @ApiPropertyOptional({ example: 1, description: 'The page number' })
  public offset?: number
}