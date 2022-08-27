import React from 'react'
import {
    Link as LinkRouter,
    useLocation,
  } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import useGetAppById from '../../services/Applications/useGetAppById';

const BreadcrumbNameMap = (path:string ,id:any) => {
    const getAppHook = useGetAppById(id)
    return getAppHook?.data?.name;
  }

const RouterBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return(
        <>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
            <LinkRouter color="inherit" to="#">
                پنل اطراف
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                <Typography color="text.primary" key={to}>
                    {to.includes('/applications/')? BreadcrumbNameMap(to, pathnames[index]) : 'برنامه ها'}
                </Typography>
                ) : (
                <LinkRouter color="inherit" to={to} key={to}>
                    برنامه ها
                </LinkRouter>
                );
            })}
        </Breadcrumbs>
        </>
    );
}
export default RouterBreadcrumbs;