export class BaseHttpError extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export class InternalServerError extends BaseHttpError {
  constructor(message: string) {
    super(
      500,
      message
    );
    this.stack = 'InternalServerError'
    this.name = 'Internal Server Error'
  }
}