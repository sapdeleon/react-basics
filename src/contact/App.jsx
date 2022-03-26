import React from "react";
import Card from "./Card";
import contacts from "../data/contacts";

const Contact = () => {

    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map((contact) => (
                <Card
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    img={contact.imgURL}
                    alt={contact.alt}
                    phone={contact.phone}
                    email={contact.email}
                />
            ))}
        </div>
    );
};

export default Contact;