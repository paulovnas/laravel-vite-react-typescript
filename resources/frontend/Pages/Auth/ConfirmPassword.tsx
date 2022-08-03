import React, { useEffect } from 'react';
import Button from '../../../Components/Button';
import Guest from '../../Layouts/Guest';
import Input from '../../..//Components/Input';
import Label from '../../..//Components/Label';
import ValidationErrors from '../../..//Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/confirm-password');
    };

    return (
        <Guest>
            <>
                <Head title="Confirmar Senha" />

                <div className="mb-4 text-sm text-gray-600">
                    Esta é uma área segura do aplicativo. Confirme sua senha antes de continuar.
                </div>

                <ValidationErrors errors={errors}/>

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="password" value="Senha" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Confirmar
                        </Button>
                    </div>
                </form>
            </>
        </Guest>
    );
}
