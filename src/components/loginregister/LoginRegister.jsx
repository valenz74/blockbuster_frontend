import './LoginRegister.css'

import React, { useContext, useState } from 'react'
import { getJwt, login, registrar } from '../../utils/apiFunctions';
import { useNavigate } from 'react-router';

import { loggedContext, userContext, alertContext} from '../../App';
import jwtDecode from 'jwt-decode';

const LoginRegister = () => {

    const navigate = useNavigate();
    const { logged, setLogged } = useContext(loggedContext);
    const { user, setUser } = useContext(userContext);
    const {swalProps, setSwalProps} = useContext(alertContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registro, setRegistro] = useState(false);


    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const loguear = async () => {
        let mensaje = await login(username, password);
        if (mensaje == "success") {
            setLogged(true);

            if (getJwt()) {
                const data = jwtDecode(getJwt());

                setUser(
                    {
                        username: data.username,
                        role: data.role
                    }
                );
            }

            navigate("/");
        } else {
            console.log(mensaje);
        }
    }

    const registrando = async () => {
        let mensaje = "";
        mensaje = await registrar(username, password);
        setSwalProps({
            show:true,
            title:"Notificación",
            text:mensaje
        })
    }

    return (
        <div className='mt-4 cont-formulario'>
            <h2 className='text-center'> {registro ? 'Regístrate, si aún no tienes cuenta' : 'Inicia Sesión'} </h2>
            <div className='pt-2 mb-1'>
                <input className='form-control' placeholder='Username' type="text" onChange={handleChangeUsername} />
            </div>

            <div className='pt-2 mb-1'>
                <input className='form-control' placeholder='Password' type="password" onChange={handleChangePassword} />
            </div>

            <div>
                {
                    registro ? (
                        <button className='mt-2 btn-login' onClick={registrando}>Registrar</button>
                    ) : (
                        <button className='mt-2 btn-login' onClick={loguear}>Ingresar</button>
                    )
                }
            </div>

            <div>
                <button className='mt-5 btn-opcion' onClick={()=>setRegistro(!registro)} >
                    {registro ? 'Ya tienes una cuenta?, Inicia sesión':'No tienes una cuenta, regístrate'}
                </button>
            </div>

        </div>
    )
}

export default LoginRegister