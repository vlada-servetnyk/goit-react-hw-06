import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters?.name || "");


    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    return (
            <ul className={s.contacts_list}>
                {visibleContacts.map(item => {
                    return (
                        <li className={s.contact_item} key={item.id}>
                            <Contact
                                id={item.id}
                                name={item.name}
                                phone={item.number}
                            />
                        </li>
                    )
                })}
            </ul>
    )
};

export default ContactList;