import { Paper, Grid, Text } from "@mantine/core";
import Authenticated from "../Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { IAuth } from "../../interfaces/Route";

interface IProps {
    auth: IAuth;
}

export default function Dashboard(props: IProps) {
    return (
        <Authenticated auth={props.auth}>
            <>
                <Head title="Dashboard" />
                <Grid mb={20} justify="space-between" align="center">
                    <Grid.Col span={6}>
                        <Text size={20} color="blue" weight={700}>
                            Dashboard
                        </Text>
                    </Grid.Col>
                </Grid>
                <Paper shadow="sm" radius="md" p="md">
                    <Text>Painel Administrativo</Text>
                </Paper>
            </>
        </Authenticated>
    );
}
