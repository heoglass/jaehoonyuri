import styled from "@emotion/styled";

<<<<<<< HEAD
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
=======
// import IMG_MAIN from "../assets/images/main.jpg";
import IMG_MAIN from "../assets/images/main2.png";
import IMG_MAIN_TEXT from "../assets/images/main-text.png";

const Container = styled.div({});

const MainImageArea = styled.div({
  width: "375px",
  height: "100vh",
  position: "relative",
>>>>>>> 565b613 (영역 화면 추가)

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

<<<<<<< HEAD
export default function Main() {
  return (
    <Container>
      <InvitationContainer>
        <p>모바일 청첩장</p>
      </InvitationContainer>
=======
const MainImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
const MainTextImage = styled.img({
  width: "270px",
  height: "auto",
  objectFit: "cover",
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translate(-50%,0)",
});

const InformationArea = styled.div({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translate(-50%,0)",
});

const InformationText = styled.p({
  fontSize: "18px",
  textAlign: "center",
  color: "#FFFFFF",

  span: {
    fontSize: "14px",
  },
});

export default function Main() {
  return (
    <Container>
      <MainImageArea>
        <MainTextImage src={IMG_MAIN_TEXT} />
        <MainImage src={IMG_MAIN} alt="메인 이미지" />

        <InformationArea>
          <InformationText>
            JAEHOON <span>|</span> YURI
            <br />
            2026. 03. 21 Sat PM 1:30
          </InformationText>
        </InformationArea>
      </MainImageArea>
>>>>>>> 565b613 (영역 화면 추가)
    </Container>
  );
}
