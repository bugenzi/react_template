import { AxiosResponse } from "axios";
import HttpClient from "./http-client-base";

export default class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super("https://cat-fact.herokuapp.com");
  }

  public static getInstance(): MainApi {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }
    return this.classInstance;
  }

  public getData = (): Promise<AxiosResponse<any, any>> =>
    this.instance.get("/facts");
}
