import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';

interface ILoginFormValues {
    email: string;
    password: string;
}

interface ILoginAdditionalProps {
    message: string;
}

const InnerForm = (props: ILoginAdditionalProps & FormikProps<ILoginFormValues>) => {
    const { touched, errors, isSubmitting, message, values, setFieldValue } = props;

    const navigate = useNavigate();

    return (
        <Form>
            <h3 className="auth-form-title">{message}</h3>
            <Input
                className="auth-form-input"
                value={values.email}
                type="email"
                placeholder="Email"
                inline
                fullWidth
                onChange={(value) => setFieldValue('email', value)}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Input
                className="auth-form-input"
                value={values.password}
                type="password"
                placeholder="Password"
                inline
                fullWidth
                onChange={(value) => setFieldValue('password', value)}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <span
                className="auth-link"
                role="button"
                onKeyDown={() => navigate('../password')}
                onClick={() => navigate('../password')}
                tabIndex={-1}
            >
                Forgot password?
            </span>

            <Button
                text="Submit"
                disabled={isSubmitting}
                onClick={() => {
                    console.log();
                }}
            />
            {/* <button type="submit" disabled={isSubmitting}>
                Submit
            </button> */}
        </Form>
    );
};

interface ILoginFormProps {
    initialEmail?: string;
    message: string;
}

const isValidEmail = (email: string) => {
    return true;
};

export const LoginForm = withFormik<ILoginFormProps, ILoginFormValues>({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: ILoginFormValues) => {
        const errors: FormikErrors<ILoginFormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!isValidEmail(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },

    handleSubmit: (values) => {
        // do submitting things
    },
})(InnerForm);
