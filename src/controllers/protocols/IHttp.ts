export interface IHttpResponse {
  status: number
  body: unknown
}

export interface IHttpRequest {
  headers?: unknown,
  query?: unknown,
  params?: unknown,
  body?: unknown
}
