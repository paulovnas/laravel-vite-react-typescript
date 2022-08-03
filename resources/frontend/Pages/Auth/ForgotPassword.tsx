import React from 'react';
import Button from '../../../Components/Button';
import Guest from '../../Layouts/Guest';
import Input from '../../../Components/Input';
import ValidationErrors from '../../../Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status } : {status: any}) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/forgot-password');
    };

    return (
        <Guest>
            <>
                <Head title="Esqueceu a senha" />

                <div className="mb-4 text-sm text-gray-500 leading-normal">
                Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos uma senha por e-mail
                link de redefinição que permitirá que você escolha um novo.
                </div>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Enviar link de redefinição
                        </Button>
                    </div>
                </form>
            </>
        </Guest>
    );
}
