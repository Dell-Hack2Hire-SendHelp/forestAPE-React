import { Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
//Customer Module
import CustomerHome from './customer/Home';
import Shop from './customer/Shop';
import ShopBox from '../components/customer/ShopBox';
import Purchase from './customer/Purchase';
//APE Module
import APEHome from './APE/APEHome';
import ViewOrder from './APE/ViewOrder';
//SUKAU Module
import SukauHome from "./sukau/SukauHome";
import SukauPlantation from "./sukau/SukauPlantation";
import SukauCertification from "./sukau/SukauCertification";

// The outlet for all the routes. This is where the routes view are defined.
function RouterOutlet() {
    return <>
        <Routes>
            <Route path="/" element={ "Home" } />
            <Route path='/signin' element={ <SignIn /> } />
            <Route path="*" element={ "Not Found" } />

            <Route path="/customer" element={ <CustomerHome /> }/>
            <Route path="/customer/shop" element={ <Shop /> } />
            <Route path="/customer/purchase" element={ <Purchase /> } />
            

            <Route path="/APE" element={ <APEHome /> } />
            <Route path="/APE/vieworder" element={ <ViewOrder /> } />

            <Route path="/sukau" element={ <SukauHome /> } />
            <Route path="/sukau/plantation" element={ <SukauPlantation /> } />
            <Route path="/sukau/certification" element={ <SukauCertification /> } />


        </Routes>
    </> 
}

export default RouterOutlet;
