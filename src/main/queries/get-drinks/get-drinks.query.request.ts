export class GetDrinksQueryRequest {
  constructor(
    public name: string,
    public category: string,
    public preparation: string
  ) {
  }
}