import React from 'react';
import {useQueries} from '@tanstack/react-query';
import AtrafQuery, {IAtrafPanelResult} from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';
import IEnviroment from 'interfaces/Environment';

export default function useGetEnviromentParameters(appIs: string,enviroments: IEnviroment[]){
  return useQueries({
    queries: enviroments.map(enviroment=>{
      return {
        queryKey: ['enviroment-params', enviroment.id],
        queryFn:  async () => {
            let [getAppsRsult] = await getParameters(appIs, enviroment.id, enviroment.accessKey);
            let apps: any;
            if (getAppsRsult) {
              apps = getAppsRsult.result;
            }
            return apps;
          }

      }
    })
  })
}

const getParameters = (appId: string, envId: number, access_key: string): Promise<[IAtrafPanelResult<any>]> => {
    return new Promise(async (resolve, reject) => {
      try {
        const DedicatedServerResult = await AtrafQuery<any>({
          url: `config/${appId}/${envId}/map`,
          method: ERequest.GET,
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('auth-token'),
            key: access_key,
          }
        });
        resolve([DedicatedServerResult]);
      } catch (error) {
        reject(error);
      }
    });
  };