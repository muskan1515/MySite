import React ,{ useState} from 'react';


import './Product.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Form from '../../Forms/addCategory';

import axios from '../../../assets/axios';

const Product =(props)=>{

     const [content,setContent]=useState('');

    const onChangeHandler=()=>{
        setContent(false);
    };

    const getCredHandler=(formdata)=>{
        console.log(formdata.get('status'));
        axios.post('/admin/category',formdata,{
            headers:{
                "Content-Type":"multipart/form-data",
                'Access-Control-Allow-Origin':'*'
            }}).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });

    };

    const onShowHandler=()=>{
        setContent(true);
           
    };
    return(
            <div className='container'>
                <button onClick={onShowHandler}> + Add Product</button>

                <table >
                <thead>
                  <tr>
                  <th>Image</th>
                  <th>Category Name</th>
                  <th>Category description</th>
                  <th>Category Status</th>
                  <th>#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
                </tbody>
              </table>
                {content?<div>
                    <Backdrop change={onChangeHandler}/>
                    <Form trigger={getCredHandler}/>
                    </div>:''}
            </div>
    ); 
     
};

export default Product;