import React from 'react'
import ProductListCard from './ProductListCard'
import "./css.css";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { getAllProducts } from '../../DAL/serverFunctions';
import { useState, useEffect } from 'react';
import { Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AllProducts() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      setProducts(await getAllProducts())
    }
    getData()
  }, [])

  return (

    <div className='mainProductsContainer'>
      <Row className='mainProcutsRow'>
        <Col lg={2} md={2} sm={12} xs={12}>
          <Accordion className='categoriesDiv'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Clothes</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/login'>All Clothes</Link></p>
                <p><Link to='/login'>Shirts</Link></p>
                <p><Link to='/login'>Sweatshirt</Link></p>
                <p><Link to='/login'>Hats</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Figures</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/login'>All Figures</Link></p>
                <p><Link to='/login'>Action Figures</Link></p>
                <p><Link to='/login'>POP!</Link></p>
                <p><Link to='/login'>Key Chains</Link></p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Comic</Accordion.Header>
              <Accordion.Body>
                <p><Link to='/login'>Comic Books</Link></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Row className='productsListRows'>
            {
              products.map(({ productDetails, photos, product_name }, index) =>
                <ProductListCard key={index}
                  name={product_name}
                  price={productDetails[0]["unit_price"]}
                  image={photos[0]["photo_source"]}>
                </ProductListCard>)
            }
          </Row>
        </Col>
      </Row>
    </div>


  )
}

export default AllProducts