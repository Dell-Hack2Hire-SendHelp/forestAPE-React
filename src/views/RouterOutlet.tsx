import { Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';

import CustomerHome from './customer/Home';
import Shop from './customer/Shop';
import ShopBox from '../components/customer/ShopBox';
import Purchase from './customer/Purchase';



// The outlet for all the routes. This is where the routes view are defined.
function RouterOutlet() {
    return <>
        <Routes>
            {/* <Route path="/" element={ "Home" } /> */}
            <Route path='/signin' element={ <SignIn /> } />
            <Route path="*" element={ "Not Found" } />

            <Route path="/" element={ <CustomerHome /> } />
            <Route path='/shop' element={ <ShopBox /> } />
            <Route path='/purchase' element={ <Purchase /> } />
        </Routes>
    </> 
}

export default RouterOutlet;