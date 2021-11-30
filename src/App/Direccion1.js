import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Direccion1 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    departamento: '',
                    cuidad: '',
                    barrio: '',

                }}
                validationSchema={Yup.object().shape({
                    departamento: Yup.string()
                        .required('Departamento requerrido'),
                    cuidad: Yup.string()
                        .required('Cuidad requerrida'),
                    barrio: Yup.string()
                        .required('Barrio requerrido'),

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/direccion2');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="departamento">Departamento</label>
                            <Field name="departamento" type="text" className={'form-control' + (errors.departamento && touched.departamento ? ' is-invalid' : '')} />
                            <ErrorMessage name="departamento" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuidad">Cuidad</label>
                            <Field name="cuidad" type="text" className={'form-control' + (errors.cuidad && touched.cuidad ? ' is-invalid' : '')} />
                            <ErrorMessage name="cuidad" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="barrio">Barrio</label>
                            <Field name="barrio" type="text" className={'form-control' + (errors.barrio && touched.barrio ? ' is-invalid' : '')} />
                            <ErrorMessage name="barrio" component="div" className="invalid-feedback" />
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
