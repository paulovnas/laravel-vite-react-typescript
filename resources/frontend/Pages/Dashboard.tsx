import {
    Box,
    Text
  } from '@mantine/core';
import Authenticated from '../Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { IAuth } from '../../interfaces/Route';


interface IProps {
    auth: IAuth
}

export default function Dashboard(props : IProps) {
    return (
        <Authenticated
            auth={props.auth}
        >
            <>
                <Head title="Dashboard" />
                <h2>Dashboard</h2>
                <Box>
                    <Text>Você está logado!</Text>
                </Box>
            </>
        </Authenticated>
    );
}
