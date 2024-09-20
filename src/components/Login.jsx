import { useReducer } from 'react';
import './Login.css';  // Archivo CSS para los estilos

export const Login = () => {
    // Estado inicial
    const initialState = {
        validando: false,
        token: null,
        username: '',
        nombre: '',
    };

    // Reducer para manejar las acciones de login y logout
    const authReducer = (state, action) => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    nombre: '',
                };
            case 'login':
                const { nombre, username } = action.payload;
                return {
                    validando: false,
                    token: 'MITOKEN1234567890',
                    username,
                    nombre,
                };
            default:
                return state;
        }
    };

    // Hook useReducer con el reducer y estado inicial
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Función para manejar el login
    const handleLogin = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Sahagun',
                nombre: 'Aldo',
            },
        });
    };

    // Función para manejar el logout
    const handleLogout = () => {
        dispatch({
            type: 'logout',
        });
    };

    return (
        <>
            <h3>Login</h3>

            {state.validando && (
                <div className="alert info">
                    Validando Información...
                </div>
            )}

            {!state.token ? (
                <div className="alert danger">
                    No Autenticado...
                </div>
            ) : (
                <div className="alert success">
                    Autenticado como: {state.nombre} ({state.username})
                </div>
            )}

            {!state.token ? (
                <button
                    className="btn login"
                    onClick={handleLogin}
                >
                    Login
                </button>
            ) : (
                <button
                    className="btn logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            )}
        </>
    );
};
