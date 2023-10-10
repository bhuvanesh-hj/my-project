import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductImage from "../Main/ProductImage";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  const params = useParams();
  return (
    <Switch>
      <Route path="/products/Men Fancy Shirts" exact>
        <Container>
          <h2>{params.productId}</h2>
          <Row>
            <Col>
              <ProductImage product={params.productId} />
            </Col>
            <Col>
              {" "}
              <h4>Reviews</h4>
              <p>⭐⭐⭐⭐</p>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the
               1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Route>
      <Route path="/products/Men's Poly Cotton" exact>
      <Container>
      <h2>{params.productId}</h2>
          <Row>
            <Col>
              <ProductImage product={params.productId} />
            </Col>
            <Col>
              {" "}
              <h4>Reviews</h4>
              <p>⭐⭐⭐</p>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the
               1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Route>
      <Route path="/products/Digital Printed Half Sleeve Shirt" exact>
      <Container>
      <h2>{params.productId}</h2>
          <Row>
            <Col>
              <ProductImage product={params.productId} />
            </Col>
            <Col>
              {" "}
              <h4>Reviews</h4>
              <p>⭐⭐</p>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the
               1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Route>
      <Route path="/products/Sports Men Pants" exact>
      <Container>
      <h2>{params.productId}</h2>
          <Row>
            <Col>
              <ProductImage product={params.productId} />
            </Col>
            <Col>
              {" "}
              <h4>Reviews</h4>
              <p>⭐⭐⭐⭐</p>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the
               1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Route>
    </Switch>
  );
};

export default ProductDetail;
