import { Outlet } from "react-router-dom";

export default function DefaultLayout(){


    return (

        <>
        <header>
           <div className="container-fluid text-center bg-light">
            <h1 className="text-uppercase text-success py-2">My list movies</h1>
                </div>
        
        </header>







        <main>
            <Outlet />
        </main>
        <footer></footer>
        </>
    )
}