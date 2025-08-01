import { Outlet } from "react-router-dom";

export default function DefaultLayout(){


    return (

        <>
        <header>
           <div className="container-fluid text-center bg-light">
            <h1>My list movies</h1>
                </div>
            
          
           





        
        </header>







        <main>
            <Outlet />
        </main>
        <footer></footer>
        </>
    )
}