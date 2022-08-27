import axios, { AxiosRequestConfig } from 'axios';
import { ERequest } from '../../Enums/App.Enums';
import { toast } from 'react-toastify';

export interface IAtrafPanelResult<T> {
    result: T;
    referenceNumber: number;
    path: string;
    status: number;
    timestamp: string;
}

export const atrafPanelAxiosInstance = axios.create();
atrafPanelAxiosInstance.defaults.baseURL = 'https://atraaf.sakku-khatam.ir/';

const AtrafQuery = async <T>(FetchConfig: {
    url: string;
    method: ERequest;
    data?: {
      [key: string]: any;
    };
    params?: {
      [key: string]: any;
    };
    headers?: {
      [key: string]: string;
    };
    showMessage?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  }): Promise<IAtrafPanelResult<T>> => {
    return new Promise(async (resolve, reject) => {
      FetchConfig.showMessage = FetchConfig.showMessage === undefined ? true : FetchConfig.showMessage; // default is true
      const request: AxiosRequestConfig = {
        method: FetchConfig.method,
        url: FetchConfig.url,
        data: FetchConfig.data,
        params: FetchConfig.params,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Accept-Language': 'fa',
          // 'Accept-Language': 'fa-IR,fa;q=0.9',
          ...FetchConfig.headers,
        },
        responseType: FetchConfig.responseType,
      };
  
      return await atrafPanelAxiosInstance(request)
        .then((res) => {
          resolve((res.data || { data: 'OK' }) as IAtrafPanelResult<T>);
        })
        .catch(async (error) => {
          const message = error?.response?.data?.message;
          if (FetchConfig.showMessage && error.response.status === 400) {
            showError(message || 'خطا در ورودی ها');
          } else if (FetchConfig.showMessage) {
            showError(message || 'خطا در برقراری ارتباط با سرور');
          }
          reject(error);
        });
    });
  };
  export default AtrafQuery;
  
  let timeout: ReturnType<typeof setTimeout>;
  const showError = (message: string[] | string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      toast.error(typeof message === 'string' ? message : message.join(' '));
    }, 500);
  };