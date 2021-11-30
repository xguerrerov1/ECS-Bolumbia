import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';






export default class Direccion2 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    direccion: '',
                    estracto: '',
                    tipo_vivienda: ''
                }}
                validationSchema={Yup.object().shape({
                    direccion: Yup.string()
                        .required('direccioncion requerida'),
                    estracto: Yup.string()
                        .required('estractocto requerido'),

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/feedback');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="direccion">direccioncion</label>
                            <Field name="direccion" type="text" className={'form-control' + (errors.direccion && touched.direccion ? ' is-invalid' : '')} />
                            <ErrorMessage name="direccion" component="div" className="invalid-feedback" />
                        </div>
                        {/*i<div> estractocto
                            <Field name="estracto" as="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                            </Field>
                        </div>*/}
                        <div className={(errors.estracto && touched.estracto ? ' is-invalid' : '')} >
                            estractocto:    
                            <label>
                            <Field type="radio" name="estracto" value="1"/> 1
                            </label>
                            <label>
                            <Field type="radio" name="estracto" value="2"/> 2
                            </label>
                            <label>
                            <Field type="radio" name="estracto" value="3"/> 3
                            </label>
                            <label>
                            <Field type="radio" name="estracto" value="4"/> 4
                            </label>
                            <label>
                            <Field type="radio" name="estracto" value="5"/> 5
                            </label>
                            <label>
                            <Field type="radio" name="estracto" value="6"/> 6
                            </label>
                            <ErrorMessage name="estracto" component="div" className="invalid-feedback" /> 
                        </div>
                        <div> Tipo de vivienda:    
                            <label>
                            <Field type="radio" name="tipo_vivienda" value="alquilada"/> Alquilada
                            </label>
                            <label>
                            <Field type="radio" name="tipo_vivienda" value="propia"/> Popria
                            </label>
                            <label>
                            <Field type="radio" name="tipo_vivienda" value="hipotecada"/> Hipotecada
                            </label>
                            <label>
                            <Field type="radio" name="tipo_vivienda" value="cedida"/> Cedida
                            </label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            
                        </div>
                        <div className="form-group">
                             <a href="./direccioncion1"> Atras
                            </a>
                       </div>

                    </Form>
                    
                )}
            />
            
        )
        
    }
}
