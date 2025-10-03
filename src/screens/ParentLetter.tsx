import styled from "@emotion/styled";
import IMG_TITLE_BACKGROUND from "../assets/images/background-parent.png";

const Container = styled.div({
  backgroundColor: "#FDFFCD",
  padding: "30px",
});

const LetterArea = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const GroomTitleArea = styled.div({
  position: "relative",
  marginBottom: "16px",
});
const BrideTitleArea = styled.div({
  position: "relative",
  margin: "30px 0 16px",
});
const TitleBackgroundImage = styled.img({
  width: "200px",
  height: "auto",
  objectFit: "cover",
});
const GroomTitle = styled.p({
  width: "100%",
  fontSize: "18px",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "#344325",
});
const BrideTitle = styled.p({
  width: "100%",
  fontSize: "18px",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "#FFADD6",
});

const GroomImageArea = styled.div({
  position: "relative",
});
const GroomImageTitle = styled.p({
  fontSize: "18px",
  position: "absolute",
  top: "16px",
  left: "16px",

  span: {
    fontSize: "14px",
  },
});
const GroomImage = styled.div({
  width: "300px",
  height: "300px",
  backgroundColor: "#ccc",
});

const BrideImageArea = styled.div({
  position: "relative",
});
const BrideImageTitle = styled.p({
  fontSize: "18px",
  position: "absolute",
  top: "16px",
  left: "16px",

  span: {
    fontSize: "14px",
  },
});
const BrideImage = styled.div({
  width: "300px",
  height: "300px",
  backgroundColor: "#ccc",
});

export default function ParentLetter() {
  return (
    <Container>
      <LetterArea>
        <GroomTitleArea>
          <TitleBackgroundImage src={IMG_TITLE_BACKGROUND} />
          <GroomTitle>Groom’s Parents</GroomTitle>
        </GroomTitleArea>

        <GroomImageArea>
          <GroomImageTitle>
            정동일 & 정혜자 <span>의</span>
            <br />
            아들 재훈
          </GroomImageTitle>
          <GroomImage></GroomImage>
        </GroomImageArea>
      </LetterArea>
      <LetterArea>
        <BrideTitleArea>
          <TitleBackgroundImage src={IMG_TITLE_BACKGROUND} />
          <BrideTitle>Bride’s Parents</BrideTitle>
        </BrideTitleArea>

        <BrideImageArea>
          <BrideImageTitle>
            허정 & 양금란 <span>의</span>
            <br />딸 유리
          </BrideImageTitle>
          <BrideImage></BrideImage>
        </BrideImageArea>
      </LetterArea>
    </Container>
  );
}
