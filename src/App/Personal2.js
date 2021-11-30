import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default class Personal2 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    estado: '',
                    naci: ''
                }}
                validationSchema={Yup.object().shape({
                    naci: Yup.string()
                        .required('Lugar de nacimiento requerido'),

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/direccion1');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div> Estado Civil:    
                            <label>
                            <Field type="radio" name="estado" value="soltero"/> Soltero
                            </label>
                            <label>
                            <Field type="radio" name="estado" value="casado"/> Casado
                            </label>
                            <label>
                            <Field type="radio" name="estado" value="unionlibre"/> Union Libre
                            </label>
                            <label>
                            <Field type="radio" name="estado" value="divorciado"/> Divorciado
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="naci">Lugar de nacimiento</label>
                            <Field name="naci" type="text" className={'form-control' + (errors.naci && touched.naci ? ' is-invalid' : '')} />
                            <ErrorMessage name="naci" component="div" className="invalid-feedback" />
                        </div>


                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            
                        </div>
                        <div className="form-group">
                             <a href="./Personal1"> Atras
                            </a>
                       </div>

                    </Form>
                    
                )}
            />
            
        )
        
    }
}
