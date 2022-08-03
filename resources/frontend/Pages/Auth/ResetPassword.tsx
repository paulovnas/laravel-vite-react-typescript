import React, { useEffect } from 'react';
import Button from '../../../Components/Button';
import Guest from '../../Layouts/Guest';
import Input from '../../../Components/Input';
import Label from '../../../Components/Label';
import ValidationErrors from '../../../Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

interface IReset {
    token: string,
    email: string
}

export default function ResetPassword({ token, email } : IReset) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/reset-password');
    };

    return (
        <Guest>
            <>
                <Head title="Redefinir Senha" />

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div>
                        <Label forInput="email" value="Email" />

                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password" value="Senha" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password_confirmation" value="Confirmar Senha" />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Redefinir
                        </Button>
                    </div>
                </form>
            </>
        </Guest>
    );
}
