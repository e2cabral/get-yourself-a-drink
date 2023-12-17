import {BaseHttpError} from "../http/errors";

export class ResponseFactory {
  static async onSuccess(data: unknown): Promise<Response> {
    return {
      body: data,
      status: 200
    }
  }

  static async onError<T extends Newable<T>>(err: T): Promise<Response> {
    const { status, message } = new err()
    return {
      body: { message },
      status: status
    }
  }
}

type Response = {
  body: unknown
  status: number
}



interface Newable<T> {
  new(): BaseHttpError
}