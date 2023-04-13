
import React, { useState } from 'react';
import './Form.css';
import Category from '../AdminPanel/Category/Category';
import axios from 'axios';

const Form=(props)=>{
    const [state,setState]=useState({
        name:'',
        description:'',
        image:'',
        status:'active',
        formdata: new FormData()
    });


    const onChangeHnadler=(event)=>{
        if(event.target.name==='image'){
            setState({
                ...state,
                image:event.target.files[0]
            });
            state.formdata.append(event.target.name,event.target.files[0]);
            return;
        }
        setState({
            ...state,
            [event.target.name]:event.target.value
        });
        state.formdata.append(event.target.name,event.target.value);
       
    };

    const onSubmitHandler=(event)=>{
        event.preventDefault();
       
        console.log(state.formdata.get('image'));
        props.trigger(state.formdata);
        setState({
            name:'',
            description:'',
            image:'',
            status:''
        });
    }

    return(
        <div className='addCategory'>
        <form>
        <h3>Add Category</h3>
        <div className='entries'>
        <label>Category name:</label>
        <input id="name" name='name' type='text' onChange={onChangeHnadler}/>
        </div>
        <div className='entries'>
        <label>Category Description:</label>
        <textarea id='description' name='description' onChange={onChangeHnadler}/>
        </div>
        <div className='entries'>
        <label>Category Image:</label>
        <input  id='image' name='image' type='file' row='5' onChange={onChangeHnadler}/>
        </div>
        <div className='entries'>
        <label>Category status:</label>
        <select name="status" id="status"  value='' onChange={onChangeHnadler}>
            <option value='active'>active</option>
            <option value="disable">disable</option>
        </select>
        </div>
        <button onClick={onSubmitHandler} > Save this Category </button>
        </form>
        </div>
       
    );
}

export default Form;