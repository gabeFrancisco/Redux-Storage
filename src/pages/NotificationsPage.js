import React from "react";
import Container from "../components/Container/Container";
import NotificationsList from "../components/Lists/NotificationsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function NotificationsPage() {
  return (
    <div>
      <SectionTitle
        title="Last notifications"
        subtitle="A list containing the last notifications and actions"
      />
      <Container>
        <NotificationsList />
      </Container>
    </div>
  );
}
