import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopNav from "./TopNav";
import PropertyContainer from "./PropertyContainer";
import BookingsContainer from "./BookingsContainer";

import "./css/styles.css";
import UploadBookingsContainer from "./UploadBookingContainer";

export const Admin = () => {
  const [activePage, setActivePage] = useState("Property");

  const renderActivePage = () => {
    console.log("Sdsds"+activePage);
    switch (activePage) {
      case "Property":
        return <PropertyContainer />;
      case "Bookings":
        return <BookingsContainer />;
      case "UploadBookings":
        return <UploadBookingsContainer />;

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
