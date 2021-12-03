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



    async function showID(){
      let result = await fetch(
        "http://localhost:8000/api/showid/" + id
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
        <Header ti/>   
        <ReactNotification/>
        <Row style={{ paddingTop: "50px", background: "#ccc" }}>
            <Col md={{ span: 4, offset: 4 }}>
            <Form className="form">
                <h2><b>Chỉnh Sửa Sản Phẩm</b></h2>
                <br/><br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Tên sản phẩm</b></Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên sản phẩm" id="name" defaultValue={data.name} />
                    <Form.Text className="text-muted">
                        Hãy nhập tên sản phẩm
                    </Form.Text>
                    <Form.Label className='err'>{val.name}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giá mới sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Hãy nhập giá mới sản phẩm" id="price_new" defaultValue={data.price_new} />
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.price_new}</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giá cũ sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Hãy nhập giá cũ sản phẩm" id="price_old" defaultValue={data.price_old}/>
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.price_old}</Form.Label>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giảm giá sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Giảm giá sản phẩm" id="discount" defaultValue={data.discount}/>
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>{val.discount}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Chọn hình ảnh sản phẩm</b></Form.Label>
                    <Form.Control  type="file" placeholder="Chọn hình ảnh sản phẩm" onChange={(e) => setImage(e.target.files[0])}/>
                    <Form.Text className="text-muted">
                    <img variant="top" src={"http://127.0.0.1:8000/image/product/" + data.image} alt={data.image} style={{width:"150px"}} />
                    </Form.Text>
                    <Form.Label className='err'>{val.image}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Chi tiết sản phẩm</b></Form.Label>
                    <Form.Control  type="text" placeholder="Chi tiết sản phẩm" id="detail" defaultValue={data.detail}/>
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>{val.detail}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Số lượng hàng sẵn có</b></Form.Label>
                    <Form.Control  type="number" placeholder="Số lượng hàng sẵn có" id="quantity" defaultValue={data.quantity} />
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>{val.quantity}</Form.Label>
                </Form.Group>

                <Form.Select onChange={(e) => setName(e.target.value)} aria-label="Chọn loại sản phẩm" defaultValue={data.name}>
                    <option>Hãy chọn loại sản phẩm</option>
                    <option value="noibat">Nổi bật</option>
                    <option value="banchay">Bán chạy</option>
                    <option value="dientu">Điện tử</option>
                    <option value="noithat">Nội thất</option>
                    <option value="phuongtien">Phương tiện</option>
                    <option value="thucu">Thú cưng</option>
                    <option value="sach">Sách,báo</option>
                    <option value="thoitrang">Thời trang</option>
                    <option value="chotang">Cho tặng</option>
                </Form.Select>
                <Form.Label className='err'>{val.name}</Form.Label>
                <br/><br/><br/><br/>

                <Form.Select onChange={(e) => setProductStatus(e.target.value)} aria-label="Chọn loại sản phẩm" defaultValue={data.product_status}>
                    <option>Hãy chọn trạng thái sản phẩm</option>
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Bán cháy hàng">Bán cháy hàng</option>
                    <option value="Chỉ còn 10 sản phẩm">Chỉ còn 10 sản phẩm</option>
                    <option value="Hết hàng">Hết hàng</option>
                   
                </Form.Select>
                <Form.Label className='err'>{val.product_status}</Form.Label>
                <br/>
                <br/>
                {/* <Link to={"/listproduct"}> */}
                <Button onClick={editClub}  variant="outline-success"><b>Sửa ngay</b></Button>{' '}
                {/* </Link> */}
                
                
                
            </Form>
            </Col>
            </Row>
   </Helmet>
 );
}
export default withRouter(EditClub);