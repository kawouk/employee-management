import settings from "../settings";
import axios from "axios"; 

const API_BASE_URL = settings.development.baseApiUrl;

export default class FetchApi {
  public readonly baseUrl: string;
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async get(url: string, options?: any): Promise<any> {
    return FetchApi._makeRequest("GET", url, options);
  }

  async post(url: string, data?: any, options?: any): Promise<any> {
    return FetchApi._makeRequest("POST", url, data, options);
  }

  async put(url: string, data: any, options?: any): Promise<any> {
    return FetchApi._makeRequest("PUT", url, data, options);
  }

  async delete(url: string, options?: any): Promise<any> {
    return FetchApi._makeRequest("DELETE", url, options);
  }

  async patch(url: string, options?: any): Promise<any> {
    return FetchApi._makeRequest("PATCH", url, options);
  }

  private static async _makeRequest(
    method: string,
    url: string,
    data?: any,
    options?: any
  ): Promise<any> {
    try {
      const fullUrl = `${API_BASE_URL}/${url}`;
      const response = await axios.request({
        url: fullUrl,
        method,
        data,
        ...options,
      });
      return response.data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }
}
