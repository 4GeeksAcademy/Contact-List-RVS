import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AgregarCard = () => {
    const navigation = useNavigate()

    const { store, actions } = useContext(Context);

    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    })

    const addContact = () => {
        actions.newContact({ ...contact, id: contact.email + contact.phone })
        navigation("/")
    }
    return (
        <div className="container">
            <form onSubmit={e => e.preventDefault()} className="list-group">
                {store.nuevatarjeta.map((item, index) => {
                    return (
                        <>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">
                                    Nombre Completo
                                </label>
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control"
                                    value={contact.full_name || ""}
                                    id={item.full_name}
                                    onChange={(evt) => setContact({ ...contact, full_name: evt.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    key={index}
                                    type="email"
                                    className="form-control"
                                    value={contact.email || ""}
                                    id={item.email}
                                    onChange={(evt) => setContact({ ...contact, email: evt.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Teléfono
                                </label>
                                <input
                                    key={index}
                                    type="number"
                                    className="form-control"
                                    value={contact.phone || ""}
                                    id={item.phone}
                                    onChange={(evt) => setContact({ ...contact, phone: evt.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">
                                    Dirección
                                </label>
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control"
                                    value={contact.address || ""}
                                    id={item.address}
                                    onChange={(evt) => setContact({ ...contact, address: evt.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => addContact()}>
                                Crear Contacto
                            </button>
                        </>
                    );
                })}
            </form>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
