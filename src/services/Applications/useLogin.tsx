import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import AtrafQuery from './AtrafQuery';
import { ERequest } from '../../Enums/App.Enums';
import {toast} from 'react-toastify'

export default function useLogin(){
    let navigate = useNavigate();
    const key = 'login';
    return useMutation(
      async (values: {
        username: string;
        password: string;
        podToken: string;
      }) => {
        const {username, password, podToken} = values;
        const result = await AtrafQuery<string>({
          url: `/user/token`,
          method: ERequest.POST,
          data: {username, password, podToken},
        });
        return result;
      },
      {
        onMutate: (values) => {},
        onSuccess: (result, values) => {
          window.localStorage.setItem('auth-token', result.result);
          toast.success('ورود باموفقیت ایجاد شد.',{
            autoClose: 2000,
          })
          navigate("../", { replace: true })
        },
        onSettled: () => {},
        onError: (error, values, rollback) => {
        },
      },
    );
}