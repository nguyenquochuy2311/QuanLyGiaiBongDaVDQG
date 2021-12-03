import React from 'react';
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import {Form, Button,Row,Col} from "react-bootstrap";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";


 function EditClub(props) {
    const [val, setValidator] = useState([]);

  //chứa thông tin theo id của  clb   
    const [data, setData] = useState([]);

   
    const [image,setImage] = useState(data.image);
    const [name,setName] = useState(data.name);
    const [product_status,setProductStatus] = useState(data.product_status);
    // const [product_status,setProductStatus] = useState(data.product_status);
    // const [product_status,setProductStatus] = useState(data.product_status);



    let id = props.match.params.id;
    

    useEffect(() => {
        showID();
  
    }, []);


//lay hlv
    async function showID(){
      let result = await fetch(
        "http://localhost:8000/api/hlv/" + id
      );
      result = await result.json();
      setData(result);
      console.log(result);
    }

    //lay hlv
    async function showID(){
        let result = await fetch(
          "http://localhost:8000/api/hlv/" + id
        );
        result = await result.json();
        setData(result);
        console.log(result);
      }
  
    
    async function editClub(){

       

        const name = document.getElementById("name");
        const price_new = document.getElementById("price_new");
        const price_old = document.getElementById("price_old");
        const discount= document.getElementById("discount");
        const detail= document.getElementById("detail");
        // const name= document.getElementById("name");
        // const product_status= document.getElementById("product_status");
        const quantity= document.getElementById("quantity");

        const formData = new FormData(); 
        formData.append("name", name.value);
        formData.append("price_new", price_new.value);
        formData.append("price_old",price_old.value);
        formData.append("discount",discount.value);
        formData.append("image",image);
        formData.append("detail",detail.value);
        formData.append("name",name);
        formData.append("product_status",product_status);
        formData.append("quantity",quantity.value);



        let result = await fetch("http://127.0.0.1:8000/api/editClub/" + id, {
            method: "post",
            body: formData,
          
        });
        result = await result.json();

        console.log("Trả về addproduct :",result);
        
        if(result.val_err){

            //Nếu có lối thì truyền vào cho setValidator
            setValidator(result.val_err)
        }else{
            store.addNotification({
                title: "Chỉnh sửa sản phẩm thành công !",
                message: "Hãy kiểm tra list sản phẩm của bạn !",
                type: 'success',
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 10000,
                    onScreen: true
                }
            });
        }

    }





 return (
   <Helmet title='Chỉnh sử CLB'>
        <AdminHeader />         
        <Header title='Chỉnh sửa CLB'/>   
        <ReactNotification/>
        <Row style={{ paddingTop: "50px", background: "#ccc" }}>
            <Col md={{ span: 4, offset: 4 }}>
            <Form className="form">
                <h2><b>Thông tin câu lạc </b></h2>
                <br/><br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Tên câu lạc bộ</b></Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên CLB" id="name" defaultValue={data.name} />
                    <Form.Label className='err'>{val.name}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Logo</b></Form.Label>
                    <Form.Control  type="file" placeholder="Chọn hình ảnh " onChange={(e) => setImage(e.target.files[0])}/>
                    <Form.Text className="text-muted">
                    <img variant="top" src={''} alt={data.image} style={{width:"150px"}} />
                    </Form.Text>
                    <Form.Label className='err'>{val.image}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Sân vận động</b></Form.Label>
                    <Form.Control maxlength="11" type="text" placeholder="Hãy nhập tên sân vận động" id="price_new" defaultValue={data.price_new} />
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.price_new}</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Huấn luyện viên trưởng</b></Form.Label>
                    <Form.Control maxlength="11" type="text" placeholder="Hãy nhập tên huấn luyện viên" id="price_old" defaultValue={data.price_old}/>
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.price_old}</Form.Label>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Số trận thắng</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Số trận thắng" id="discount" defaultValue={data.discount}/>
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.discount}</Form.Label>
                </Form.Group>

               
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Số trận hòa</b></Form.Label>
                    <Form.Control  type="number" placeholder="Số trận hòa" id="detail" defaultValue={data.detail}/>
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>{val.detail}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Số trận thua</b></Form.Label>
                    <Form.Control  type="number" placeholder="Số trận thua" id="quantity" defaultValue={data.quantity} />
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>{val.quantity}</Form.Label>
                </Form.Group>

                {/* <Link to={"/listproduct"}> */}
                <Button onClick={editClub}  variant="outline-success"><b>Sửa ngay</b></Button>{' '}
                {/* </Link> */}
                <br/>
                <br/>
                <br/>
                <br/>
                
                
                
            </Form>
            </Col>
            </Row>
   </Helmet>
 );
}
export default withRouter(EditClub);