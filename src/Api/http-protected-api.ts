import { AxiosRequestConfig } from "axios";
import IExample from "../@types/example.type";
import HttpClient from "./http-client-base";

export default class MainApiProtected extends HttpClient {
  public constructor() {
    super("https://api.awesome-site.com");

    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    let configResult = config?.headers;
    if (!configResult) configResult = {};

    return configResult;
  };

  public createUser = (body: IExample) => this.instance.post("/users", body);
}
