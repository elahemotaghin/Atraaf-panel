import React from 'react'
import IApplication from '../../interfaces/Application';
import {useQuery, useMutation} from '@tanstack/react-query';
import AtrafQuery from './AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';

export default function useDeletedApplication(){
    const key = 'delete-application';
    return useMutation(
      async (values: {
        id: number|string;
      }) => {
        const {id} = values;
        const result = await AtrafQuery<IApplication>({
          url: `application/`+ id,
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