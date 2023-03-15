import { Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
//Customer Module
import CustomerHome from './customer/Home';
import Shop from './customer/Shop';
import ShopBox from '../components/customer/ShopBox';
import Purchase from './customer/Purchase';
//APE Module
import APEHome from './APE/Home';
import ViewOrder from './APE/ViewOrder';
//SUKAU Module
import SukauHome from "./sukau/SukauHome";
import SukauPlantation from "./sukau/SukauPlantation";

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
