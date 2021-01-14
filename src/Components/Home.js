import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { loggedIn } from "../utils/httpService"
import { Link } from "react-router-dom"
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Courses from "./Pages/Courses";
import Body from "./Pages/Body";
import LogOut from "./LogOut";
import Channel from "./Pages/Channel";
import TeacherInfo from "./Pages/TeacherInfo";
import StudentInfo from "./Pages/StudentInfo";
import CourseInfo from "./Pages/CourseInfo";






class Home extends Component {
    state = {
        Teachers: null,
        Students: null,
        Courses: null,
        teacherid: 1,
        studentid: 1,
        courseid: 1

    }

    handelTeacherClick = e => {

        this.setState({
            teacherid: e.target.id
        })
    }

    handelStudentrClick = e => {

        this.setState({
            studentid: e.target.id
        })
    }


    handelCourseClick = e => {

        this.setState({
            courseid: e.target.id
        })
    }
    componentDidMount() {

        fetch('./School.json')
            .then(response => {

                return response.json();
            }).then(data => {

                this.setState({
                    Teachers: data.Techers,
                    Students: data.Students,
                    Courses: data.Courses,
                    ID: null,
                    buttonClicked: false,

                })

            }).catch(err => {

                console.log("Error Reading data " + err);
            })

    }


    render() {

        return (
            <>
                {loggedIn() ? (
                    <>
                        <Header />
                        <NavBar />

                        <Switch>
                            <Route exact path="/Home/">
                                <Body />
                            </Route>

                            <Route path="/Home/Pages/Teachers">
                                <Teachers teacher={this.state.Teachers} func={this.handelTeacherClick} />
                            </Route>

                            <Route path="/Home/Pages/Students">
                                <Students students={this.state.Students} courses={this.state.Courses} func={this.handelStudentrClick} />
                            </Route>

                            <Route path="/Home/Pages/Courses">
                                <Courses Courses={this.state.Courses} func={this.handelCourseClick} />
                            </Route>

                            <Route path="/Home/LogOut">
                                <LogOut />
                            </Route>

                            <Route path="/Home/Pages/Channel">
                                <Channel />
                            </Route>

                            <Route path="/Home/Pages/TeacherInfo">
                                <TeacherInfo teacher={this.state.Teachers} id={this.state.teacherid} courses={this.state.Courses} students={this.state.Students}
                                    func={this.handelStudentrClick} funcCourse={this.handelCourseClick} />
                            </Route>


                            <Route path="/Home/Pages/StudentInfo">
                                <StudentInfo id={this.state.studentid} courses={this.state.Courses} student={this.state.Students} />
                            </Route>

                            <Route path="/Home/Pages/CourseInfo">
                                <CourseInfo id={this.state.courseid} courses={this.state.Courses}  teacher={this.state.Teachers}/>
                            </Route>

                        </Switch>

                        <Footer />
                    </>
                ) : (<h1> You have to br logged in !! <Link to="/"> log in from here</Link></h1>)}



            </>
        );
    }
}

export default Home;
