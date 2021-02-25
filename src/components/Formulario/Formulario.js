import React, { useState } from 'react';
import { Fragment } from 'react';


const Formulario = ({ crearOrder }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        
        phone: ''
    })

    const getContactData = (e) => {
        const {name, value} = e.target
        setForm((state) => {
            return {...state, [name]: value}
        })
        console.log(form)
    }

    const finalizeCompra = () => {
        const { name, email, phone } = form
        crearOrder({name, email, phone})
    }

    return (
        <Fragment>
            <h2>Datos de Usuario</h2>
             <form onSubmit={finalizeCompra}>
             <div>
                      <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                  </div>
                  <div>
                      <input placeholder="Correo Electrónico" name="email" value={form.email} onChange={getContactData} type="email"/>
                  </div>
                  <div>
                      <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                  </div>
                  <button className="btn btn-primary" type="submit">Finalizar</button>
             </form>
        </Fragment>
    
    )

}
export default Formulario