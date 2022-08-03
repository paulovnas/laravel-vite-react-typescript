import React, { useEffect } from 'react';
import Button from '../../../Components/Button';
import Guest from '../../Layouts/Guest';
import Input from '../../../Components/Input';
import Label from '../../../Components/Label';
import ValidationErrors from '../../../Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nickname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event : any) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <Guest>
            <>
                <Head title="Registrar-se" />

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div>
                        <Label forInput="name" value="Nome" />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="nickname" value="Apelido" />

                        <Input
                            type="text"
                            name="nickname"
                            value={data.nickname}
                            className="mt-1 block w-full"
                            autoComplete="nickname"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email" value="Email" />

                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
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
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password_confirmation" value="Confirmar Senha" />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href='/login' className="underline text-sm text-gray-600 hover:text-gray-900">
                            Ja é registrado?
                        </Link>

                        <Button className="ml-4" processing={processing}>
                            Registrar
                        </Button>
                    </div>
                </form>
            </>
        </Guest>
    );
}
