import React ,{ Component} from 'react';


import './Category.css';
import Table from '../../Table/Table';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Form from '../../Forms/addCategory';
import {useLocation} from 'react-router-dom';

import axios from '../../../assets/axios';


class Category extends Component{

     state={
      content:'',
      categoryData:[]
     };

    componentWillMount(){
        axios.get('/admin/category',{
          header:{
              'Content-Type':'multipart/form-data',
              'Access-Control-Allow-Origin':'*'
          }}).then(res=>{
           this.getDataHandler(res.data);
          }).catch(err=>{
            console.log(err);
          });
    };

     onChangeHandler=()=>{
        this.setState({content:false});
    };
    
     getDataHandler=(data)=>{
    
      const values=[];
      data.map((key,index)=>{
        values[index]="key"; 
        return true;
      });
      console.log(typeof(values));
      console.log(this.state);
    }

     getCredHandler=(formdata)=>{
        console.log(formdata.get('status'));
        axios.post('/admin/category',formdata,{
            headers:{
                "Content-Type":"multipart/form-data",
                'Access-Control-Allow-Origin':'*'
        }}).then(res=>{
                this.onChangeHandler();
                console.log(res);
        }).catch(err=>{
                console.log(err);
        });

    };

     onShowHandler=()=>{
        this.setState({content:true});
           
    };
    render(){
      return(
      
        <div className='container'>
        {this.state.categoryData}
            <button onClick={this.onShowHandler}> + Add Category</button>
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
              {this.state.categoryData}
            </tbody>
          </table>
            {this.state.content?<div>
                <Backdrop change={this.onChangeHandler}/>
                <Form trigger={this.getCredHandler}/>
                </div>:''}
        </div>
); 
    }
    
     
};

export default Category;