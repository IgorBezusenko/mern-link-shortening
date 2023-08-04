import {Loader} from "./components/Loader/Loader";
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {useAuth} from "./lib/hooks/auth.hook";
import {AuthContext} from "./lib/context/AuthContext";
import {Navbar} from "./components/Navbar/Navbar";
import "materialize-css"

function App() {
    const {token, userId, login, logout, ready} = useAuth()
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated)
    if (!ready) {
        return <Loader/>
    }
    return (
        <AuthContext.Provider value={{
            token, userId, login, logout, isAuthenticated
        }}>
            <BrowserRouter>
                {isAuthenticated && <Navbar/>}
                <div className={"container "}>
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
