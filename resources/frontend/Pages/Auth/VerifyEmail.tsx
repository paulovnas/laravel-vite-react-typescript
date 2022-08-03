import React from 'react';
import Button from '../../../Components/Button';
import Guest from '../../Layouts/Guest';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function VerifyEmail({ status } : {status: any}) {
    const { post, processing } = useForm();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/email/verification-notification');
    };

    return (
        <Guest>
            <>
                <Head title="Verificação de Email" />

                <div className="mb-4 text-sm text-gray-600">
                Obrigado por inscrever-se! Antes de começar, você pode verificar seu endereço de e-mail clicando no
                link que acabamos de enviar para você? Se você não recebeu o e-mail, teremos o prazer de lhe enviar outro.
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        Um novo link de verificação foi enviado para o endereço de e-mail fornecido durante o registro.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <Button processing={processing}>Enviar email de verificação</Button>

                        <Link
                            href='/logout'
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Sair
                        </Link>
                    </div>
                </form>
            </>
        </Guest>
    );
}
