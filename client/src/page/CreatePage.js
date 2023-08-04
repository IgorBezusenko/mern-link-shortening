import React, {useContext, useState} from 'react';
import {useHttp} from "../lib/hooks/http.hook";
import {AuthContext} from "../lib/context/AuthContext";
import {useNavigate} from "react-router-dom";

const CreatePage = () => {
    const [link, setLink] = useState("")
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {request} = useHttp()
    const pressHandler = async (e) => {
        if (e.key === "Enter") {
            try {
                const data = await request("/api/link/generate", "POST", {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                navigate(`/detail/${data.link._id}`)
            } catch (error) {

            }
        }
    };
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{padding: "2rem 0 0 0"}}>
                <div className="input-field">
                    <input onChange={(e) => setLink(e.target.value)}
                           onKeyPress={pressHandler}
                           value={link} id="link"
                           name="link" type="text"/>
                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>

        </div>
    );
};

export default CreatePage;