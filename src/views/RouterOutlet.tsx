import { Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';



// The outlet for all the routes. This is where the routes view are defined.
function RouterOutlet() {
    return <>
        <Routes>
            <Route path="/" element={ "Home" } />
            <Route path='/signin' element={ <SignIn /> } />
            <Route path="*" element={ "Not Found" } />
        </Routes>
    </> 
}

export default RouterOutlet;