import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/ContextProvider";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Row,
  Col,
  CardFooter,
} from "react-bootstrap";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const Home = () => {
  const ctx = useContext(Context);
  const [expenseDetails, setExpenseDetails] = useState({});
  const [edit, setEdit] = useState();

  const total = ctx.expenseList.reduce((acc, curr) => {
    return acc+ +curr.Price;
  }, 0);

  const chnageHnadler = (e) => {
    setExpenseDetails({
      ...expenseDetails,
      [e.target.name]: e.target.value,
    });
  };

  const editChangeHandler = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const editHandler = (expense) => {
    setEdit(expense);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      ctx.editExpense(edit);
      setEdit(null);
    } else {
      ctx.addExpense(expenseDetails);
    }
    e.target.reset();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 20px",
        }}
      >
        <div style={{ color: "white" }}>"Welcome to Expense Tracker!"</div>
        {ctx.loginStatus && !ctx.emailVerified ? (
          <div style={{ color: "white" }}>
            Your profile Incomplete.<Link to="/profile">Complete now!</Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {ctx.loginStatus && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Container style={{ width: "40%" }}>
            <Card>
              <CardHeader
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>Expense Form</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Price of the expense</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>₹</InputGroup.Text>
                      <Form.Control
                        aria-label="Amount (to the nearest Rupee)"
                        type="number"
                        min={0}
                        required
                        name="Price"
                        onChange={edit ? editChangeHandler : chnageHnadler}
                        value={edit && edit.Price}
                      />
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <Form.Label>Description of the expense</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      required
                      name="Description"
                      onChange={edit ? editChangeHandler : chnageHnadler}
                      value={edit && edit.Description}
                    />
                    <Form.Select
                      style={{
                        width: "100%",
                        margin: "20px 0",
                        height: "38px",
                        borderColor: "rgb(206,212,218)",
                        borderRadius: "4px",
                      }}
                      required
                      name="Category"
                      onChange={edit ? editChangeHandler : chnageHnadler}
                      value={edit && edit.Category}
                    >
                      <option>Open this select Category</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Shopping">Shopping</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" size="lg" type="submit">
                    {!edit ? "Add Expense" : "Update Expense"}
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Container>
          <Container style={{ width: "60%", alignSelf: "self-start" }}>
            <Card>
              <CardHeader>
                <h3>Expense List</h3>
              </CardHeader>
              <CardBody style={{ height: "279px", overflow: "auto" }}>
                <ListGroup>
                  {ctx.expenseList.map((expense, i) => (
                    <ListGroup.Item key={i + 1}>
                      <Row>
                        <Col>{i + 1}.</Col>
                        <Col>₹ {expense.Price}</Col>
                        <Col>{expense.Description}</Col>
                        <Col>{expense.Category}</Col>
                        <Col>
                          <Button
                            size="sm"
                            variant="outline-light"
                            onClick={() => editHandler(expense)}
                          >
                            <MdModeEditOutline style={{ color: "black" }} />
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => ctx.deleteExpense(expense.id)}
                          >
                            <MdDelete />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </CardBody>
              <CardFooter>
                <h5>Total Amount: ₹{total.toFixed(2)}</h5>
              </CardFooter>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;
