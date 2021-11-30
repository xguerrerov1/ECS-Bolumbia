import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Personal1 extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    edad: '',
                    sexo: '',
                }}
                validationSchema={Yup.object().shape({
                    nombre: Yup.string()
                        .required('First Name is required'),
                    apellido: Yup.string()
                        .required('Last Name is required'),
                    edad: Yup.number()
                        .max(130, 'Ingresa una edad valida')
                        .required('Edad requerida'),
                    

                })}
                onSubmit={fields => {

                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/personal2');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <Field name="nombre" type="text" className={'form-control' + (errors.nombre && touched.nombre ? ' is-invalid' : '')} />
                            <ErrorMessage name="nombre" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <Field name="apellido" type="text" className={'form-control' + (errors.apellido && touched.apellido ? ' is-invalid' : '')} />
                            <ErrorMessage name="apellido" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edad">Edad</label>
                            <Field name="edad" type="text" className={'form-control' + (errors.edad && touched.edad ? ' is-invalid' : '')} />
                            <ErrorMessage name="edad" component="div" className="invalid-feedback" />
                        </div>
                        <div> Genero:    
                           {/* <label>
                            <Field type="radio" name="sexo" value="hombre"/> Hombre
                            </label>
                            <label>
                            <Field type="radio" name="sexo" value="mujer"/> Mujer
                            </label>
                            <label>
                            <Field type="radio" name="sexo" value="nobinario"/> No Binario
                            </label>
                            <label>
                            <Field type="radio" name="sexo" value="indefinito"/> Indefinido
                            </label>
                            <ErrorMessage name="age" component="div" className="invalid-feedback" /> */}
                            <Field name="sexo" as="select">
                                    <option value="hombre">Hombre</option>
                                    <option value="mujer">Mujer</option>
                                    <option value="nobinario">No binario</option>
                            </Field>

                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                            
                        </div>
                        <div className="form-group">
                             <a href="./Home"> Atras
                            </a>
                       </div>

                    </Form>
                    
                )}
            />
            
        )
        
    }
}
