import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttp} from "../lib/hooks/http.hook";
import {AuthContext} from "../lib/context/AuthContext";
import {Loader} from "../components/Loader/Loader";
import {LinkCard} from "../components/LinkCard/LinkCard";

const DetailPage = () => {
    const [link, setLink] = useState(null)
    const linkId = useParams().id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()


    const getLink = useCallback(async () => {
        try {
            const response = await request(`/api/link/${linkId}`, "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setLink(response)
        } catch (e) {
        }
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink]);


    if (loading) {
        return <Loader/>
    }
    return (
        <>
            {!loading && link && <LinkCard link={link}/>}
        </>
    );
};

export default DetailPage;