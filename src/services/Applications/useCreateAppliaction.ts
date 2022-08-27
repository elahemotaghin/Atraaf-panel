import React from 'react'
import IServer from '../../interfaces/Server';
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from './AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';
import {toast} from 'react-toastify'

export default function useCreateApplication(){
    const key = 'create-app';
    return useMutation(
      async (values: {
        name: string;
        description?: string;
      }) => {
        const {name, description} = values;
        const result = await AtrafQuery<IServer>({
          url: `/application`,
          method: ERequest.POST,
          headers: {
            Authorization: 'Bearer '+ window.localStorage.getItem('auth-token')
          },
          data: {name, description},
        });
        return result;
      },
      {
        onMutate: (values) => {},
        onSuccess: (result, values) => {
          toast.success('برنامه باموفقیت ایجاد شد.',{
            autoClose: 2000,
          })
        },
        onSettled: () => {},
        onError: (error, values, rollback) => {
          toast.error('ایجاد برنامه با خطا مواجه شد.',{
            autoClose: 2000,
          })
        },
      },
    );
}