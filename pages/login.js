import React, {useState} from 'react';
import { css } from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

// Firebase
import firebase from '../firebase';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
    email: '',
    password: ''
}

const LogIn = () => {

const [error, guardarError] = useState(false);

const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
} = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

const {email, password} = valores;

async function iniciarSesion() {
    try {
        const usuario = await firebase.login(email, password);
        console.log(usuario);
        Router.push('/');
    } catch (error) {
        console.error('Hubo un error al iniciar sesión', error.message);
        guardarError(error.message);
    }
}

return ( 
    <div>
        <Layout>
            <h1
                css={css`
                    text-align: center;
                    margin-top: 5rem;
                `}
            >Iniciar Sesión</h1>
            <Formulario
                onSubmit={handleSubmit}
            >
                <Campo>
                    <label htmlFor="email">E-Mail</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Tu email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>

                {errores.email && <Error>{errores.email}</Error>}

                <Campo>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Tu password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>

                {errores.password && <Error>{errores.password}</Error>}

                {error && <Error>{error}</Error>}

                <InputSubmit 
                    type="submit" 
                    value="Iniciar Sesión"
                />
            </Formulario>
        </Layout>
    </div>
 );
}
 
export default LogIn;