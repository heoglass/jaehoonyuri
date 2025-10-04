import styled from "@emotion/styled";

const Container = styled.div({
  padding: "30px 0",
});

const Title = styled.p({
  fontSize: "20px",
  textAlign: "center",
});

export default function Gallery() {
  return (
    <Container>
      <Title>GALLERY</Title>
    </Container>
  );
}
