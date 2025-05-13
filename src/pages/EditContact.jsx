import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

const initialState = {
    name: "",
    email: "",
    phone: "",
    address:""
}

export const EditContact = () => {
    

    const {store, dispatch} = useGlobalReducer()
    
    const [editContact, setEditContact]= useState(initialState)
    const { theId } = useParams()

     const handleOnChange = (event) => {

        setEditContact({
            ...editContact,
            [event.target.name]: event.target.value
        });
    }


    const editInfoContact = async (event) => {
        if (event.target.name == "save") {
            try {
                const response = await fetch(`${store.urlBase}/Tatiana/contacts/${theId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editContact)
                });
                if (response.ok) {
                    const data = await response.json()
                    setEditContact(data);
                }
            } catch (error) {
                console.log(error)
            }

        };
    };

    useEffect(()=>{
        if (store.contacts && store.contacts.length > 0 && theId) {
        
        const contactToEdit = store.contacts.find(
            (contact) => String(contact.id) === String(theId) 
        );
        if (contactToEdit) {
            setEditContact(contactToEdit);
        }
    }
    },[theId, store.contacts])

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5"> Edit contact</h1>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                value={editContact.name}
                                name="name"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                value={editContact.email}
                                name="email"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                value={editContact.phone}
                                name="phone"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                value={editContact.address}
                                name="address"

                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
                        </div>
                    </div>
                      <Link
                        to="/"
                        type="button"
                        name="save"
                        onClick={editInfoContact}
                        className="col-12 btn btn-primary text-center">save</Link>
                </div>

                <Link to="/">
                    <span className="primary">or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
}