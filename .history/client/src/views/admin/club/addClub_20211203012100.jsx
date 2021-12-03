import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import {Form, Button,Row,Col} from "react-bootstrap";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { Link } from "react-router-dom";

export default function AddProduct() {

    const [name,setName] = useState("");
    const [price_new,setPriceNew] = useState("");
    const [price_old,setPriceOld] = useState("");
    const [discount, setDiscount] = useState("");
    const [image,setImage] = useState("");
    const [detail,setDetail] = useState("");
    const [product_type,setProductType] = useState("");
    const [product_status,setProductStatus] = useState("");
    const [quantity,setQuantity] = useState("");
    
    async function addProduct(){

        const formData = new FormData(); 
        formData.append("name", name);
        formData.append("price_new", price_new);
        formData.append("price_old",price_old);
        formData.append("discount",discount);
        formData.append("image",image);
        formData.append("detail",detail);
        formData.append("product_type",product_type);
        formData.append("product_status",product_status);
        formData.append("quantity",quantity);



        let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
            method: "post",
            body: formData,
          
        });
        result = await result.json();

        console.log("Trả về addproduct :",result);
        store.addNotification({
            title: "Thêm sản phẩm thành công !",
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





 return (
   <div>
        <AdminHeader/>
               
        <ReactNotification/>


        <Row>
            <Col md={{ span: 4, offset: 4 }}>
            <Form className="form"> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Tên sản phẩm</b></Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên sản phẩm" onChange={(e) => setName(e.target.value)} />
                    <Form.Text className="text-muted">
                        Hãy nhập tên sản phẩm
                    </Form.Text>
                    <Form.Label className='err'>--</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giá mới sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Hãy nhập giá mới sản phẩm" onChange={(e) => setPriceNew(e.target.value)} />
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>----</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giá cũ sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Hãy nhập giá cũ sản phẩm" onChange={(e) => setPriceOld(e.target.value)} />
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>----</Form.Label>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Giảm giá sản phẩm</b></Form.Label>
                    <Form.Control maxlength="11" type="number" placeholder="Giảm giá sản phẩm" onChange={(e) => setDiscount(e.target.value)} />
                    <Form.Text className="text-muted">
                        ------
                    </Form.Text>
                    <Form.Label className='err'>----</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Chọn hình ảnh sản phẩm</b></Form.Label>
                    <Form.Control  type="file" placeholder="Chọn hình ảnh sản phẩm" onChange={(e) => setImage(e.target.files[0])} />
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>-</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Chi tiết sản phẩm</b></Form.Label>
                    <Form.Control  type="text" placeholder="Chi tiết sản phẩm" onChange={(e) => setDetail(e.target.value)} />
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>-</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Số lượng hàng sẵn có</b></Form.Label>
                    <Form.Control  type="number" placeholder="Số lượng hàng sẵn có" onChange={(e) => setQuantity(e.target.value)} />
                    <Form.Text className="text-muted">
                        -
                    </Form.Text>
                    <Form.Label className='err'>-</Form.Label>
                </Form.Group>

                <Form.Select  onChange={(e) => setProductType(e.target.value)} aria-label="Chọn loại sản phẩm">
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
                <br/><br/><br/><br/>

                <Form.Select  onChange={(e) => setProductStatus(e.target.value)} aria-label="Chọn loại sản phẩm">
                    <option>Hãy chọn trạng thái sản phẩm</option>
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Bán cháy hàng">Bán cháy hàng</option>
                    <option value="Chỉ còn 10 sản phẩm">Chỉ còn 10 sản phẩm</option>
                    <option value="Hết hàng">Hết hàng</option>
                   
                </Form.Select>
                <br/>
                <br/>
                <Link to={"listproduct"}>
                <Button onClick={addProduct}  variant="outline-success"><b>Thêm ngay</b></Button>{' '}
                </Link>
                
            </Form>
            </Col>
            </Row>
   </div>
 );
}