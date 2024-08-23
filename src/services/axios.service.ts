import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log(`Request made to: ${config.url}`);
        return config;
      },
      (error) => {
        return Promise.reject(error)
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(`Response from: ${response.config.url}`, {
          data: response.data,
          status: response.status,
        });
        return response
      },
      (error) => {
        if (error.response) {
          console.error(`Error response from: ${error.response.config.url}`, {
            data: error.response.data,
            status: error.response.status,
          })
        } else {
          console.error(`Error: `, error.message);
        }

        return Promise.reject(error)
      }
    )
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export const axiosService = new AxiosService('https://rickandmortyapi.com/api')
