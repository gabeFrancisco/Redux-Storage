import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function HomePage() {
  return (
    <div>
      <SectionTitle
        title="Welcome to the Redux-Storage!"
        subtitle="This app is a study for myself, for fixing the Redux concepts in my mind ;)"
      />

      <p>
        This program is made with a minimal UI styling for simplification
        purposes. I want to focus on the Redux side, rather than CSS side.
      </p>

      <p>But, I like this minimal look a lot! It gives an oldschool "pre-stylesheet era" feeling!</p>
    </div>
  );
}

export default HomePage;
