import { Component } from "react";
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Courses extends Component {


    render() {

        return (
            <>

                <Container >
                    <br></br>
                    <div className="teacherInfo">


                        {this.props.Courses.map(course => (
                            <>



                                <Card style={{ width: '18rem', marginLeft: "20px" }}>
                                    <Card.Img variant="top" style={{ height: "150px", width: "150px", marginRight: "auto", marginLeft: "auto" }} src={course.img} />

                                    <div>
                                        <br></br>
                                        <Card.Body>
                                            <ListGroupItem>
                                                <Link onClick={this.props.func} id={course.id} to="/Home/Pages/CourseInfo"

                                                >
                                                    <Card.Title id={course.id}>{course.name}</Card.Title> </Link>
                                            </ListGroupItem>


                                        </Card.Body>
                                    </div>


                                </Card>
                            </>



                        ))}
                    </div>
                    <br></br>
                </Container>

            </>
        );
    }
}

export default Courses;

