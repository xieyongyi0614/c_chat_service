declare namespace API {
  export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
    timestamp: number;
    requestId: string;
  }
}
