import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import useLibApiService from "../../../hooks/libApiService";

import BookShelfImg from "../../../resources/images/bookshelf.png";
import "./SignInPage.scss";

function SignInPage() {

    const initialValues = {
        email: "",
        password: "",
        isWorker: false
    };

    const { signInUser } = useLibApiService();
    const navigate = useNavigate();

    return (  
        <div className="SignInPage">
            <Formik
                enableReinitialize={true}
                initialValues = {initialValues}
                validationSchema = {Yup.object({
                    email: Yup.string()
                                .email("Incorrect email!")
                                .required("Required field!"),
                    password: Yup.string()
                                    .required("Required field!"),
                    isWorker: Yup.boolean()
                })}
                onSubmit = { values => {

                    signInUser(values)
                        .then(res => navigate("/main"))
                        .catch(err => {
                            navigate("/error");
                            console.log(err);
                        });
                    
                }}
            >
                <Form className="Form">
                    <img src={BookShelfImg} alt="BookShelfImg"/>
                    <label htmlFor="email">Email</label>
                    <Field 
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className="Error" name="email" component="div"/>
                    <label htmlFor="password">Password</label>
                    <Field  
                        id="password"
                        name="password" 
                        type="password"
                    />
                    <ErrorMessage className="Error" name="password" component="div"/>
                    <label className="checkbox">
                        <Field 
                            id="isWorker"
                            name="isWorker" 
                            type="checkbox" 
                        />
                        Are you worker?
                    </label>
                    <button type="submit">Sign In</button>
                    <div className="NotRegistred">
                        Not registred?
                        <Link to="/signUp">
                            Register now
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );

}

export default SignInPage;