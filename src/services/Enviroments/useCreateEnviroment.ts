import React from 'react'
import IEnviroment from '../../interfaces/Environment';
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';
import {toast} from 'react-toastify'

export default function useCreateEnviroment(){
    const key = 'create-enviroment';
    return useMutation(
      async (values: {
        name: string;
        id: number | string;
      }) => {
        const {name, id} = values;
        const result = await AtrafQuery<IEnviroment>({
          url: `/application/`+ id,
          method: ERequest.POST,
          headers: {
            Authorization: 'Bearer '+ window.localStorage.getItem('auth-token')
          },
          data: {name},
        });
        return result;
      },
      {
        onMutate: (values) => {},
        onSuccess: (result, values) => {
          toast.success('محیط باموفقیت ایجاد شد.',{
            autoClose: 2000,
          })
        },
        onSettled: () => {},
        onError: (error, values, rollback) => {
          toast.error('ایجاد محیط با خطا مواجه شد.',{
            autoClose: 2000,
          })
        },
      },
    );
}