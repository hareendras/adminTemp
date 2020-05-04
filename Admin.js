import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopNav from "./TopNav";
import PropertyContainer from "./PropertyContainer";
import BookingsContainer from "./BookingsContainer";
import "./css/styles.css";

export const Admin = () => {
  const [activePage, setActivePage] = useState("Property");

  const renderActivePage = () => {
    switch (activePage) {
      case "Property":
        return <PropertyContainer />;
      case "Bookings":
        return <BookingsContainer />;

      default:
        return <PropertyContainer />;
    }
  };

  return (
    <Container className={"MainContainer"}>
      <TopNav setActivePage={setActivePage} />
      {renderActivePage()}
    </Container>
  );
};

export default Admin;
