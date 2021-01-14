import { Component } from "react";
import RigesterdCourses from "./RigesterdCourses";
import TeacherStudents from "./TeacherStudents";
import { Card, Container, Nav, ListGroupItem } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class TeacherInfo extends Component {


    render() {


        return (
            <>


                <Container>
                    <br></br><br></br>
                    <div className="teacherInfo">

                        <div>
                            <img src={this.props.teacher[this.props.id].img} ></img>
                            <br></br><br></br>
                            <ul className="personalInfo">
                                {/* <li> {this.props.teacher[this.props.id].name} </li> */}
                                <li> {this.props.teacher[this.props.id].bio} </li>
                                {/* <li> {this.props.teacher[this.props.id].email} </li> */}

                            </ul>



                        </div>

                        <div className="CrsStd">
                            <p>Courses {this.props.teacher[this.props.id].name} Teached  </p>
                            {

                                this.props.teacher[this.props.id].course.map(CRS => (
                                    <ListGroupItem>
                                        <ListGroupItem>
                                            < RigesterdCourses courseid={CRS} AllCourses={this.props.courses} />
                                        </ListGroupItem>
                                        <Link onClick={this.props.funcCourse} id={CRS} to="/Home/Pages/CourseInfo">  View Course Details </Link>

                                    </ListGroupItem>

                                ))
                            }
                            <br></br><br></br>

                            <p>Students Linked With</p>
                            {
                                this.props.teacher[this.props.id].linkedStudent.map(linkedStudent => (

                                    <ListGroupItem>
                                        <ListGroupItem>
                                            <  TeacherStudents LinkS={linkedStudent} AllStudents={this.props.students} />

                                        </ListGroupItem>
                                        <Link onClick={this.props.func} id={linkedStudent} to="/Home/Pages/StudentInfo">  View Profile </Link>
                                    </ListGroupItem>
                                ))}


                        </div>

                    </div>
                </Container>
                <br></br><br></br>   <br></br><br></br>










                {/* <Card.Body>
                                        <Card.Link href="#">New Course</Card.Link>
                                        <Card.Link href="#">New Student</Card.Link>
                                    </Card.Body> */}




            </>
        );
    }
}

export default TeacherInfo;