import {Ingredients} from "./ingredients.model";
import {ApiProperty} from "@nestjs/swagger";

export class Drink {
  constructor(
    id: number,
    name: string,
    category: string,
    preparation: string,
    image: string,
    ingredients: Array<Ingredients>
  ) {
    this.id = id
    this.name = name
    this.category = category
    this.preparation = preparation
    this.image = image
    this.ingredients = ingredients
  }

  @ApiProperty({ example: 1, description: 'The unique id of teh drink' })
  public id: number

  @ApiProperty({ example: 'Wine', description: 'The name of the drink' })
  public name: string

  @ApiProperty({ example: 'Wine', description: 'The category of the drink' })
  public category: string

  @ApiProperty({
    example: 'Remove the cover and fill the cup',
    description: 'The preparation method'
  })
  public preparation: string

  @ApiProperty({
    example: 'http://via.placeholder.com/640x360',
    description: 'The image url of the drink'
  })
  public image: string

  @ApiProperty({
    example: '[{"name": "Italian Wine", "amount": 100, "unit": "ml"}]',
    description: 'The ingredients of the drink'
  })
  public ingredients: Array<Ingredients>
}