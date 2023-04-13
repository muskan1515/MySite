import React ,{Component} from 'react';
 import {Buffer} from 'buffer';

import axio from '../../../assets/axios';
import order_logo from '../../../images/order_logo.jpg';
import customer_logo from '../../../images/customer+logo.jpg';
import product_logo from '../../../images/product_logo.jpg';
import category_logo from '../../../images/category_logo.jpg';
import './Dashboard.css';

let arr=[];
class Dashboard extends Component{

    state={
        header:{
            'Content-Type':'multipart/form-data',
            'Access-Control-Allow-Origin':'*'
        },
        imagesData:[]
    }

    componentWillMount(){
        axio.get("/admin/sliderImage",this.state).then(res=>{
            console.log(res);
            this.imageDataHnadler(res);   
        }).catch(err=>{
            console.log(err);
        });
    }

    imageDataHnadler=(res)=>{
        arr=res.data.map((key,index)=>{
            const base64=Buffer.from(key.img.data).toString('base64');
            const name=key.name;
            const contentType=key.img.contentType;
            return <img key={index } src={"data:"+contentType+";base64," + base64} alt={name}/>
        });
        this.setState({imagesData:arr});
        
    }


    onUploadHnadler=(event)=>{

    const fileInfo=event.target.files[0];

    const formdata=new FormData();
    formdata.append('file',fileInfo);
    axio.post("/admin/sliderImage",formdata,this.state).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    
    };
    render(){
        return(
            <div>
                <div className="container">
                    <div className="one">
                        <img className='imgclassone' src={customer_logo}/>
                        Customer
                    </div>
                    <div className="two">
                        <img className='imgclassone' src={order_logo}/>
                        Order
                    </div>
                    <div className="three">
                        <img className='imgclassone' src={product_logo}/>
                        Product
                    </div>
                    <div className="four">
                        <img className='imgclassone' src={category_logo}/>
                        Category
                    </div>
                </div>
                <div className='containerslider'>
                    <h3>Shop Slider Images</h3>
                    <hr/>
                    <div className="upload-btn-wrapper">
                        <button className="btn"> + Upload Images </button>
                        <input type="file" name="myfile" id="file"  onChange={this.onUploadHnadler}/>
                    </div>
                    <div className='sliderimagecontainer'>
                          {(arr.length>0)?arr:<h2>Sorry an Error Occured!!</h2>}
                        </div>
                </div>
                <div className='containerslider'>
                    <h3>Today's Orders are #ordercount</h3>
                </div>
            </div>
        );
    };
};

export default Dashboard;