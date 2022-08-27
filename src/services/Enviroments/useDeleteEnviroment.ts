import React from 'react'
import IEnviroment from '../../interfaces/Environment';
import {useQuery, useMutation} from '@tanstack/react-query';
import AtrafQuery from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';

export default function useDeleteEnviroment(){
    const key = 'delete-enviroment';
    return useMutation(
      async (values: {
        appId: number|string;
        envId: number|string;
      }) => {
        const {appId, envId} = values;
        const result = await AtrafQuery<IEnviroment>({
          url: `application/`+ appId+'/'+envId,
          method: ERequest.DELETE,
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('auth-token')
          }
        });
        return result;
      },
      {
        onMutate: (values) => {},
        onSuccess: (result, values) => {},
        onSettled: () => {},
        onError: (error, values, rollback) => {},
      },
    );
}  