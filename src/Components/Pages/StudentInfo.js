import { Component } from "react";

import RigesterdCourses from "./RigesterdCourses";
import { Card, Container, Nav, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class StudentInfo extends Component {


    render() {


        return (
            <>

                <Container>
                    <br></br><br></br>
                    <div className="teacherInfo">
                        <div>
                            <img src={this.props.student[this.props.id].img} ></img>
                            <br></br><br></br>
                            <ul className="personalInfo">
                                <li> {this.props.student[this.props.id].name} </li>
                                <li> {this.props.student[this.props.id].age} Years old</li>
                                <li> {this.props.student[this.props.id].email} </li>

                            </ul>
                        </div>

                        <div className="CrsStd">
                            <p> {this.props.student[this.props.id].name}'s Courses  </p>
                            {

                                this.props.student[this.props.id].course.map(CRS => (
                                    <ListGroupItem>
                                        <ListGroupItem>
                                            < RigesterdCourses courseid={CRS} AllCourses={this.props.courses} />
                                        </ListGroupItem>
                                        <Link onClick={this.props.funcCourse} id={CRS} to="/Home/Pages/CourseInfo">  View Course Details </Link>

                                    </ListGroupItem>

                                ))
                            }


                        </div>

                    </div>
                    <br></br><br></br>
                </Container>






            </>
        );
    }
}

export default StudentInfo;