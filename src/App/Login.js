import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Personal1 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    CFN: '',
                    ECN: '',

                }}
                validationSchema={Yup.object().shape({

                    CFN: Yup.string()
                        .matches(/^[0-9]+$/,'Solo numeros en el codigo CFN')
                        .min(13, 'CFN invalido')
                        .max(13, 'CFN invalido')
                        .required('CFN requerido'),
                    ECN: Yup.string()
                        .matches(/^[0-9]+$/,'Solo numeros en el codigo EFN')
                        .min(12, 'EFN invalido')
                        .max(12, 'EFN invalido')
                        .required('EFN requerido')

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/personal1');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="CFN">CFN</label>
                            <Field name="CFN" type="text" className={'form-control' + (errors.CFN && touched.CFN ? ' is-invalid' : '')} />
                            <ErrorMessage name="CFN" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ECN">ECN</label>
                            <Field name="ECN" type="text" className={'form-control' + (errors.ECN && touched.ECN ? ' is-invalid' : '')} />
                            <ErrorMessage name="ECN" component="div" className="invalid-feedback" />
                        </div>
     
     

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            
                        </div>


                    </Form>
                    
                )}
            />
            
        )
        
    }
}
