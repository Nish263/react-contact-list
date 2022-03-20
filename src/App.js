import "./App.css";
import { useState, useEffect } from "react";
import { ContactList } from "./components/ContactList";
import { SearchFilter } from "./components/SearchFilter";
import { Title } from "./components/Title";
import { FetchUsers } from "./helper/apiCall";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    FetchUsers().then((data) => setContacts(data.results));
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {/* title section */}
        <Title />

        {/* search and filter section */}
        <SearchFilter />
        <hr />
        {/* user count */}
        <div className="row">
          <div className="col">55 User Found</div>
        </div>
        {/* contact list cards */}
        <ContactList users={contacts} />
      </div>
    </div>
  );
};

export default App;
