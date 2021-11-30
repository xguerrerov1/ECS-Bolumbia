import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Direccion1 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    feedback: '',

                }}
                validationSchema={Yup.object().shape({
                    feedback: Yup.string()


                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/great');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="feedback">feedbackback</label>
                            <Field name="feedback" type="text" className={'form-control' + (errors.feedback && touched.feedback ? ' is-invalid' : '')} />
                            <ErrorMessage name="feedback" component="div" className="invalid-feedbackback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            
                        </div>

                        <div className="form-group">
                             <a href="./Personal2"> Atras
                            </a>
                       </div>
                       

                    </Form>
                    
                )}
            />
            
        )
        
    }
}
