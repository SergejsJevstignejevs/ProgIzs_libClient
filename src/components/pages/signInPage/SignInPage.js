import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import BookShelfImg from "../../../resources/images/bookshelf.png";
import "./SignInPage.scss";

function SignInPage() {

    const initialValues = {
        email: "",
        password: "",
        isWorker: false
    };

    return (  
        <div className="SignInPage">
            <Formik
                initialValues = {initialValues}
                validationSchema = {Yup.object({
                    email: Yup.string()
                                .email("Incorrect email!")
                                .required("Required field!"),
                    password: Yup.string()
                                    .required("Required field!"),
                    isWorker: Yup.boolean()
                })}
                onSubmit = { values => console.log(JSON.stringify(values, null, 2)) }
            >
                {({ isSubmitting }) => (
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
                        <button type="submit" disabled={isSubmitting}>Sign In</button>
                        <div className="NotRegistred">
                            Not registred?
                            <Link to="/signUp">
                                Register now
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default SignInPage;