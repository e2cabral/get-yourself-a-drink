import {BaseHttpError} from "../http/errors";

export class ResponseFactory {
  static async onSuccess(data: unknown): Promise<Response> {
    return {
      body: data,
      status: 200
    }
  }

  static async onError(err: BaseHttpError): Promise<Response> {
    const { status, message } = err
    return {
      body: { message },
      status
    }
  }
}

type Response = {
  body: unknown
  status: number
}