import React from 'react';
import { useUsuarios } from './hooks/useUsuarios';  // Importamos el hook personalizado

export const Usuarios = () => {
    const { usuarios, ficFnPaginaSiguiente, ficFnPaginaAnterior } = useUsuarios();  // Usamos el hook

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>
                                <img src={usuario.avatar} alt={usuario.first_name} />
                            </td>
                            <td>{usuario.first_name} {usuario.last_name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Botón para ir a la página anterior */}
            <button className="btn btn-primary" onClick={ficFnPaginaAnterior}>
                Anterior       
            </button>
                
            {/* Botón para ir a la página siguiente */}
            <button className="btn btn-primary" onClick={ficFnPaginaSiguiente}>
                Siguiente       
            </button>
        </>
    );
};

