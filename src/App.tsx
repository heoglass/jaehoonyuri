import React from "react";
<<<<<<< HEAD

=======
import styled from "@emotion/styled";
import Invitation from "./screens/Invitation";
import Main from "./screens/Main";
import ParentLetter from "./screens/ParentLetter";
import Gallery from "./screens/Gallery";
import WeddingDay from "./screens/WeddingDay";
import Location from "./screens/Location";
import Account from "./screens/Account";

const Container = styled.div({
  height: "100vh",
  overflow: "hidden",
});
const InvitationContainer = styled.div({
  width: "375px",
  height: "100%",

  margin: "0 auto",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export default function App() {
  return (
    <Container>
      <InvitationContainer>
        <Main />
        <Invitation />
        <ParentLetter />
        <Gallery />
        <WeddingDay />
        <Location />
        <Account />
      </InvitationContainer>
    </Container>
>>>>>>> 565b613 (영역 화면 추가)
  );
}
