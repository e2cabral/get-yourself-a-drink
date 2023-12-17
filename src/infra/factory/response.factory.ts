import {BaseHttpError} from "../http/errors";

export class ResponseFactory {
  static async onSuccess<T>(data: T): Promise<Response<T>> {
    return {
      body: data,
      status: 200
    }
  }

  static async onError(err: BaseHttpError): Promise<Response<Message>> {
    const { status, message } = err
    return {
      body: { message },
      status
    }
  }
}

type Response<T extends unknown> = {
  body: T
  status: number
}

type Message = { message: string }