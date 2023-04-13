import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Category from '../Component/AdminPanel/Category/Category';
import Dashboard from '../Component/AdminPanel/Dashboard/Dashboard';
import Order from '../Component/AdminPanel/Order/Order';
import Product from '../Component/AdminPanel/Product/Product';

const Router=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route/>
                    <Route path='/admin/Product' element={<Product/>}/>
                    <Route path='/admin/Order' element={<Order/>}/>
                    <Route path='/admin/Category' element={<Category/>}/>
                    <Route path='/admin/Dashboard' element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;
