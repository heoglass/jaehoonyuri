import styled from "@emotion/styled";

const Container = styled.div({
  padding: "30px 0",
});

const Title = styled.p({
  fontSize: "20px",
  textAlign: "center",
});

export default function Location() {
  return (
    <Container>
      <Title>LOCATION</Title>
      <Title>오시는 길</Title>
    </Container>
  );
}
