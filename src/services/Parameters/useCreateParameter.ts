import React from 'react'
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from '../Applications/AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';
import {toast} from 'react-toastify'

export default function useCreateParameter(){
    const key = 'create-parameter';
    return useMutation(
      async (values: {
        key: string[];
        value: string[];
        global: boolean[];
        appId: string|number;
        envId: string|number;
      }) => {
        const {key, value, global, appId, envId} = values;
        const data:{key: string, value: string, global: boolean}[] = []
        for(let i = 0; i < key.length; i++){
          data.push({key: key[i], value: value[i], global: global[i]})
        }
        const result = await AtrafQuery<any>({
          url: `/application/${appId}/${envId}`,
          method: ERequest.POST,
          headers: {
            Authorization: 'Bearer '+ window.localStorage.getItem('auth-token')
          },
          data: data,
        });
        return result;
      },
      {
        onMutate: (values) => {},
        onSuccess: (result, values) => {
          if(key.length === 1)
            toast.success('پارامتر باموفقیت ایجاد شد.',{
              autoClose: 2000,
            })
        },
        onSettled: () => {},
        onError: (error, values, rollback) => {
          toast.error('ایجاد پارامتر با خطا مواجه شد.',{
            autoClose: 2000,
          })
        },
      },
    );
}