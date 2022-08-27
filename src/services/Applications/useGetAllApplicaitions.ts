import React from 'react'
import IApplication from '../../interfaces/Application';
import {useQuery} from '@tanstack/react-query';
import AtrafQuery, {IAtrafPanelResult} from './AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';

export default function useGetAllApplications(){
    return useQuery(
        [`applications`],
        async () => {
          let [getAppsRsult] = await getApplications();
          let apps: IApplication[] = [];
          if (getAppsRsult) {
            apps = getAppsRsult.result;
          }
          return apps;
        },
        {
          retry: false,
          onSuccess: () => {},
        },
      );
}  

const getApplications = (): Promise<[IAtrafPanelResult<IApplication[]>]> => {
    return new Promise(async (resolve, reject) => {
      try {
        const DedicatedServerResult = await AtrafQuery<IApplication[]>({
          url: `application`,
          method: ERequest.GET,
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('auth-token')
          }
        });
        resolve([DedicatedServerResult]);
      } catch (error) {
        reject(error);
      }
    });
  };