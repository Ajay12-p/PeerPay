import { Route,Routes } from "react-router-dom"
import History from "../Pages/History/history"

const dashRoute =()=>{
    return (
        <>
        <Routes>
            <Route exact path ="/dashbord/history" element ={<History/>}/>
        </Routes>
        
        </>
    )
}

export default dashRoute;