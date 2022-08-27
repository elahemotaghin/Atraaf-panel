import React from 'react'
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';

export default function useDeleteParameter(){
    const key = 'edit-parameter';
    return useMutation(
      async (values: {
        appId: string;
        name: string;
        envValues: any;
      }) => {
        const {appId, name, envValues} = values;
        const result = await AtrafQuery<boolean>({
          url: `application/${appId}/params`,
          method: ERequest.POST,
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('auth-token')
          },
          data: [{
            key: name,
            envValues: envValues
          }]
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