import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
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

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password is too short'),
});

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
                errorText={touched.email && errors.email ? errors.email : ''}
            />

            <Input
                className="auth-form-input"
                value={values.password}
                type="password"
                placeholder="Password"
                inline
                fullWidth
                onChange={(value) => setFieldValue('password', value)}
                errorText={touched.password && errors.password ? errors.password : ''}
            />

            <span
                className="auth-link"
                role="button"
                onKeyDown={() => navigate('../password')}
                onClick={() => navigate('../password')}
                tabIndex={-1}
            >
                Forgot password?
            </span>

            <Button className="auth-submit-btn" text="Sign in" submit disabled={isSubmitting} fullWidth size="large" />

            <div className="auth-text-link">
                <p>Not a member?</p>
                <span
                    className="auth-text-link-span"
                    role="button"
                    onKeyDown={() => navigate('../signUp')}
                    onClick={() => navigate('../signUp')}
                    tabIndex={-1}
                >
                    Sign up!
                </span>
            </div>
        </Form>
    );
};

interface ILoginFormProps {
    initialEmail?: string;
    message: string;
    onSubmit: (email: string, password: string) => void;
}

export const LoginForm = withFormik<ILoginFormProps, ILoginFormValues>({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    validationSchema,

    handleSubmit: async (looginProps, { setSubmitting, props }) => {
        const { onSubmit } = props;
        const { email, password } = looginProps;
        await onSubmit(email, password);
        setSubmitting(false);
    },
})(InnerForm);
