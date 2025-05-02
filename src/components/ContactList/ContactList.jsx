import Contact from "../Contact/Contact";
import styless from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styless.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
