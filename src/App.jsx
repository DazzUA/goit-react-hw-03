import { useEffect, useState } from "react";
import initialContacts from "../initialContacts.json";

function App() {
  

  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>

    </>
  )
}

export default App
