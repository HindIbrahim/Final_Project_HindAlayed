import React, { Component } from "react"
import { login } from "../utils/httpService"
import { Link } from "react-router-dom"
class Login extends Component {

    state = { email: "", password: "" }


    handleSubmit = e => {
        e.preventDefault()
        login(this.state)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <div style={{ display: "flex" }}>

                    <div className="loginPage">
                        <h1 > Welcome To General Assembly</h1>
                    </div>


                    <div className="contain">
                        <div className="loginForm">
                            <div className="loginLogo">  Log in</div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email :</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password :</label>
                                    <input
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <button type="submit" className=" form-But">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}

export default Login;
