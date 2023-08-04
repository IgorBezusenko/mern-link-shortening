import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../lib/hooks/http.hook";
import {AuthContext} from "../lib/context/AuthContext";
import {Loader} from "../components/Loader/Loader";
import {LinkList} from "../components/LinkList/LinkList";

const LinksPage = () => {
    const [links, setLinks] = useState(null)
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const fetchLinks = useCallback(async () => {
        try {
            const response = await request("/api/link", "GET", null, {
                Authorization: `Bearer ${token}`
            })
            console.log("response",response)
            setLinks(response)
        } catch (e) {
        }
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks]);

    if (loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && <LinkList links={links}/>}
        </>
    );
};

export default LinksPage;