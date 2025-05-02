import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contacts from "./contacts.json";

function App() {
  const [filter, setFilter] = useState("");
  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filter={filter} changeFilter={changeFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}

export default App;
