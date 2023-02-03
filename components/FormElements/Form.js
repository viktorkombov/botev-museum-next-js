import classes from './Form.module.scss';
// import RichTextEditor from './RichTextEditor';
import { convertToRaw, EditorState } from 'draft-js'
import { useState } from 'react';
import { withFormik } from 'formik';
import { sendRequest } from '../../utils/httpRequest';

const formikEnhancer = withFormik({
    mapPropsToValues: props => ({
        editorState: EditorState.createEmpty(),
        email: '',
    }),
    handleSubmit: async (values, { setSubmitting }) => {
        await sendRequest(
            'http://localhost:5000/api/posts',
            'POST',
            JSON.stringify({ title: values.email, content: convertToRaw(values.editorState.getCurrentContent()) }),
            [["Content-Type", "application/json"]]
        );
        // you probably want to transform draftjs state to something else, but I'll leave that to you.
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    },
    displayName: 'MyForm',
});

const MyForm = ({
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    isSubmitting,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: 'block' }}>
                Email
            </label>
            <input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email &&
                touched.email && (
                    <div style={{ color: 'red', marginTop: '.5rem' }}>
                        {errors.email}
                    </div>
                )}
            <label
                htmlFor="email"
                style={{ display: 'block', marginTop: '.5rem' }}
            >
                Story
            </label>
            {/* <RichTextEditor
                editorState={values.editorState}
                onChange={setFieldValue}
                onBlur={handleBlur}
            /> */}
            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
}

const MyEnhancedForm = formikEnhancer(MyForm);
export default MyEnhancedForm;
