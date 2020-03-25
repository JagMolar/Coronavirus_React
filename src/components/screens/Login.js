import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { Formik } from 'formik';
import FormGroup from 'components/UI/FormGroup';
import Label from 'components/UI/Label';
import {USER_KEY} from 'conf/consts';
import {home} from 'conf/routes';

const initialValues = {
    email:'',
    password:''
};

function validateForm(values) {
    const errors = {};
    if(!values.email){
        errors.email = 'El email es obligatorio';
    };
    if(!values.password){
        errors.password = 'El password es obligatorio';
    };

    return errors;
}

const Login = () => {
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    function handleSubmit(values){
        // console.log(values);
        window.localStorage.setItem(USER_KEY, '1234' );
        setHasLoggedIn(true);
    }

    if(hasLoggedIn){
        return <Redirect to = {home()} />
    }

    return (
        <div>
            <h1>Formulario de Contacto</h1>
            <Formik
                initialValues= {initialValues}
                validate= {validateForm}
                onSubmit= {handleSubmit}
            >
                {
                    ({values, errors, touched, handleChange, handleSubmit}) => (
                        <form onSubmit= {handleSubmit}>
                            <FormGroup>
                                <Label>Email: </Label>
                                <input  type="text" name="email" onChange={handleChange} values={values.email} />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                            </FormGroup>   
                            <FormGroup>
                                <Label>Contraseña: </Label>
                                <input  type="text" name="password" onChange={handleChange} values={values.password} />
                                {errors.password && touched.password && <p>{errors.password}</p>}
                            </FormGroup>
                            <button type="submit">Enviar</button>                     
                        </form>
                    )
                }

            </Formik>
        </div>
    );
};

export default Login;