import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button/Button';
import { Input } from '../../../../components/Input/Input';

interface IPasswordResetFormValues {
    email: string;
}

interface IPasswordResetAdditionalProps {
    message: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const InnerForm = (props: IPasswordResetAdditionalProps & FormikProps<IPasswordResetFormValues>) => {
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

            <Button className="auth-submit-btn" text="Reset" submit disabled={isSubmitting} fullWidth size="large" />

            <div className="auth-text-link">
                <p>Or</p>
                <span
                    className="auth-text-link-span"
                    role="button"
                    onKeyDown={() => navigate('../signIn')}
                    onClick={() => navigate('../signIn')}
                    tabIndex={-1}
                >
                    Sign in
                </span>
            </div>
        </Form>
    );
};

interface IPasswordResetFormProps {
    initialEmail?: string;
    message: string;
}

export const PasswordResetForm = withFormik<IPasswordResetFormProps, IPasswordResetFormValues>({
    // Transform outer props into form values
    mapPropsToValues: (props) => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    validationSchema,

    handleSubmit: () => {
        // get values from prop
        // do submitting things
    },
})(InnerForm);
