import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import useLibApiService from "../../../hooks/libApiService.hook";

import "./SignUpPage.scss";

function SignUpPage () {

    const initialValues = {
        name: "",
        surname: "",
        contactPhone: "",
        email: "",
        password: "",
        isWorker: false,
        libraryId: ""
    };

    const phoneRegExp = new RegExp("^[0-9]{8,}$");

    const { process, signUpUser } = useLibApiService();
    const navigate = useNavigate();

    return ( 
        <div className="SignUpPage">
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={ Yup.object({
                    name: Yup.string()
                                .required("Required field!"),
                    surname: Yup.string()
                                .required("Required field!"),
                    contactPhone: Yup.string()
                                        .matches(
                                            phoneRegExp,
                                            "Phone number is not valid!"
                                        )
                                        .required("Required field!"),
                    email: Yup.string()
                                .email("Incorrect email!")
                                .required("Required field!"),
                    password: Yup.string()
                                    .min(6, "Minimum 6 symbols!")
                                    .required("Required field!"),
                    isWorker: Yup.boolean(),
                    libraryId: Yup.string()
                                .when("isWorker", {
                                    is: true,
                                    then: Yup.string().required("Required field!")
                                })
                })}
                onSubmit={ values => {

                    signUpUser(values)
                        .then(res => {
                            navigate("/main")
                        })
                        .catch(err => {
                            navigate("/error");
                            console.log(err);
                        });

                }}
            >
                {({ values, isSubmitting }) => (
                    <Form className="Form">
                        <h2>Registration Form</h2>
                        <label htmlFor="name">Name</label>
                        <Field 
                            id="name"
                            name="name"
                            type="text"
                        />
                        <ErrorMessage className="Error" name="name" component="div"/>
                        <label htmlFor="surname">Surname</label>
                        <Field 
                            id="surname"
                            name="surname"
                            type="text"
                        />
                        <ErrorMessage className="Error" name="surname" component="div"/>
                        <label htmlFor="contactPhone">Contact Phone</label>
                        <Field 
                            id="contactPhone"
                            name="contactPhone"
                            type="number"
                        />
                        <ErrorMessage className="Error" name="contactPhone" component="div"/>
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
                        {values.isWorker ? 
                            <>
                                <label htmlFor="libraryId">Library Identificator</label>
                                <Field 
                                    id="libraryId"
                                    name="libraryId"
                                    type="text"
                                />
                                <ErrorMessage className="Error" name="libraryId" component="div"/>
                            </>
                            : null
                        }
                        <button type="submit" disabled={isSubmitting}>Sign Up</button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default SignUpPage ;