export class GetDrinksQueryRequest {
  constructor(
    public name: string,
    public category: string,
    public preparation: string,
    public sort: 'asc' | 'desc',
    public number: number,
    public offset: number
  ) {
  }
}