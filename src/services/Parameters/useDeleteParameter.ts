import React from 'react'
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';

export default function useDeleteParameter(){
    const key = 'delete-parameter';
    return useMutation(
      async (values: {
        appId: string;
        name: string;
      }) => {
        const {appId, name} = values;
        const result = await AtrafQuery<boolean>({
          url: `application/${appId}/params?name=${name}`,
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