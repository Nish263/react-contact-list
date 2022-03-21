import "./App.css";
import { useState, useEffect } from "react";
import { ContactList } from "./components/ContactList";
import { SearchFilter } from "./components/SearchFilter";
import { Title } from "./components/Title";
import { FetchUsers } from "./helper/apiCall";
import { Spinner } from "./components/Spinner";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);
    FetchUsers().then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  }, []);

  const handleOnGenderChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    const params = `results=20&gender=${value}`;
    FetchUsers(params).then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  };
  const handleOnSearch = (e) => {
    const { value } = e.target;
    // filter

    const filterArgs = user.filter((usr) => {
      const usrName = (usr.name.first + " " + usr.name.last).toLowerCase();
      if (usrName.includes(value.toLowerCase())) {
        return true;
      }
    });
    setContacts(filterArgs);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* title section */}
        <Title />

        {/* search and filter section */}
        <SearchFilter
          handleOnGenderChange={handleOnGenderChange}
          handleOnSearch={handleOnSearch}
        />
        <hr />
        {/* user count */}
        <div className="row">
          <div className="col">{contacts.length} Users Found!!!</div>
        </div>

        {loading && <Spinner />}
        {/* contact list cards */}
        <ContactList users={contacts} />
      </div>
    </div>
  );
};

export default App;
