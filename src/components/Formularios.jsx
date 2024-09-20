import { useForm } from './hooks/useForm';

export const Formularios = () => {
    // Usamos el custom hook con los campos iniciales del formulario
    const { email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formulario</h3>

            {/* Input de Email */}
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            {/* Input de Password */}
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            {/* Mostrar el estado del formulario en formato JSON */}
            <code>
                <pre>
                    {JSON.stringify({ email, password }, null, 2)}
                </pre>
            </code>
        </>
    );
};
