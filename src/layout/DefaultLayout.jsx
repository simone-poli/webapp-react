import { Outlet } from "react-router-dom";

export default function DefaultLayout(){


    return (

        <>
        <header>
            <h1>List of books</h1>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
        </>
    )
}