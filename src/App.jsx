import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeConfiguration } from "./themeConfig";
import { useSelector } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import ForbiddenError from "./pages/error/ForbiddenError";
import Login from "./pages/accounts/Login";
import Notfound from "./pages/error/Notfound";
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chat/Chat";
import Post from "./pages/blog/Post";
import Users from "./pages/users/Users";
import UserDetails from "./pages/users/UserDetails";
import List from "./pages/quotes/List";
import Profile from "./pages/profile/Profile";

function App() {
    const current_theme = useSelector((state) => state.ui.isDarkMode);
    const theme = createTheme(themeConfiguration(current_theme));

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/accounts/*">
                    <Route path="signin" index={true} element={<Login />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/users/" element={<Users />} />
                    <Route path="/users/details" element={<UserDetails />} />
                    <Route path="/quotes" element={<List />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/forbidden" element={<ForbiddenError />} />
                <Route path="*" element={<Notfound />} />
            </>
        ),
        {
            future: {
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        }
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={current_theme ? "dark-mode" : "light-mode"}>
                    <RouterProvider
                        future={{
                            v7_startTransition: true,
                            v7_relativeSplatPath: true,
                            v7_fetcherPersist: true,
                        }}
                        router={router}
                    />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
