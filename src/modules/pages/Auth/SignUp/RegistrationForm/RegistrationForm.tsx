import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';

interface IRegistrationFormValues {
    name: string;
    email: string;
    password: string;
}

interface IRegistrationAdditionalProps {
    message: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name is too short'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password is too short'),
});

const InnerForm = (props: IRegistrationAdditionalProps & FormikProps<IRegistrationFormValues>) => {
    const { touched, errors, isSubmitting, message, values, setFieldValue } = props;

    const navigate = useNavigate();

    return (
        <Form>
            <h3 className="auth-form-title">{message}</h3>
            <Input
                className="auth-form-input"
                value={values.name}
                placeholder="Name"
                inline
                fullWidth
                onChange={(value) => setFieldValue('name', value)}
                errorText={touched.email && errors.email ? errors.email : ''}
            />

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

            <Button className="auth-submit-btn" text="Sign up" submit disabled={isSubmitting} fullWidth size="large" />

            <div className="auth-text-link">
                <p>Already a member?</p>
                <span
                    className="auth-text-link-span"
                    role="button"
                    onKeyDown={() => navigate('../signIn')}
                    onClick={() => navigate('../signIn')}
                    tabIndex={-1}
                >
                    Sign in!
                </span>
            </div>
        </Form>
    );
};

interface IRegistrationFormProps {
    initialEmail?: string;
    message: string;
    onSubmit: (email: string, password: string, name: string) => void;
}

export const RegistrationForm = withFormik<IRegistrationFormProps, IRegistrationFormValues>({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            name: '',
            email: props.initialEmail || '',
            password: '',
        };
    },

    validationSchema,

    handleSubmit: async (registrationProps, { setSubmitting, props }) => {
        const { onSubmit } = props;
        const { email, password, name } = registrationProps;
        await onSubmit(email, password, name);
        setSubmitting(false);
    },
})(InnerForm);
