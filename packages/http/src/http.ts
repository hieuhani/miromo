export interface Config {
  baseUrl: string;
}
export class HttpClient {
  readonly config: Config;

  constructor(config: Config) {
    const baseUrl = new URL(config.baseUrl).origin;
    this.config = {
      ...config,
      baseUrl,
    };
  }

  async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    if (!response.ok) {
      throw Error(data.message);
    }
    return data;
  }

  buildUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    const relativeUrl = url.startsWith('/') ? url.substring(1) : url;

    return `${this.config.baseUrl}/${relativeUrl}`;
  }

  async get<T>(url: string): Promise<T> {
    const requestOptions = {
      method: 'GET',
    };
    return fetch(this.buildUrl(url), requestOptions).then((response) =>
      this.handleResponse(response)
    );
  }
}
