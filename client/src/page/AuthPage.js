import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../lib/hooks/http.hook";
import {useMessage} from "../lib/hooks/message.hook";
import {AuthContext} from "../lib/context/AuthContext";

const AuthPage = () => {
    const {loading, error, clearError, request} = useHttp()
    const [form, setForm] = useState({
        email: "", password: ""
    });
    const message = useMessage()
    const {login} = useContext(AuthContext)


    useEffect(() => {
        message(error);
        clearError()
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", form)
            message(data.message)
        } catch (e) {
            console.log("catch", e)
        }
    }
    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", form)
            message(data.message)
            login(data.token, data.userId)
        } catch (e) {
            console.log("catch", e)
        }
    }
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="row ">
            <div className="col s6 offset-s3 ">
                <h1>Сократи ссылку</h1>
                <div className="card  darken-1">
                    <div className="card-content ">
                        <span className="card-title">Авторизация</span>
                        <div className="row">
                            <form className="col s12">
                                <div className=" ">
                                    <div className="input-field col s12">
                                        <input onChange={changeHandler} value={form.email} id="email" name="email"
                                               type="email" className="validate"/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>

                                <div className=" ">
                                    <div className="input-field col s12">
                                        <input onChange={changeHandler} value={form.password} id="password"
                                               name="password" type="password" className="validate"/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className={"btn yellow darken-4"} style={{marginRight: "10px"}}
                                onClick={loginHandler}
                                disabled={loading}>Войти
                        </button>
                        <button
                            className={"btn grey lighten-1 black-text"}
                            onClick={registerHandler}
                            disabled={loading}>Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;