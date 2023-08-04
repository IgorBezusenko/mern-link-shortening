import LinksPage from "./page/LinksPage";
import React from "react";
import {Routes, Route} from "react-router-dom";
import CreatePage from "./page/CreatePage";
import DetailPage from "./page/DepailPage";
import AuthPage from "./page/AuthPage";
import HomePage from "./page/HomePage";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Routes>
                <Route index path={"/"} element={<HomePage/>}/>
                <Route  path={"/create"} element={<CreatePage/>}/>
                <Route path="/links" element={<LinksPage/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="*" element={<div>Not found 404</div>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route index element={<AuthPage/>}/>

            <Route path="*" element={<AuthPage/>}/>
        </Routes>
    )
}