import React from 'react'
import { useForm } from "react-hook-form";
import { signin, signInWithGoogle } from '../config/auth';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        try {
            await signin(data.email, data.password);
        } catch (error) {
            console.log("ERROR AL INICIAR SESION ", error.message);
        }

    };

    return (
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h1 className="login-heading mb-4  text-center"> Iniciar Sesión</h1>
                                    <p className="login-heading mb-4  text-center">Complete el formulario para iniciar sesión.</p>
                                    <form form className="mt-5  px-5" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-floating mb-3">
                                            <input className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                type="email"
                                                {...register("email", { required: true, maxLength: 100 })} />
                                            <label for="floatingInput">Correo Electronico</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                type="password"
                                                {...register("password", { required: true, maxLength: 50 })} />
                                            <label for="floatingPassword">Contraseña</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Iniciar Sesión</button>
                                            <hr />
                                            <button
                                                className="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2"
                                                onClick={signInWithGoogle}
                                                type="button"
                                            >
                                                Iniciar sesión con Google
                                            </button>
                                            <p className="text-center">
                                                ¿No tienes una cuenta?
                                                <Link className="a" to="/register">
                                                   <br className="text-center"> Registrate </br>
                                                </Link>
                                            </p>
                                            <hr />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage; 