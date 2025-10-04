import styled from "@emotion/styled";

const Container = styled.div({
  padding: "30px 0",
});

const Title = styled.p({
  fontSize: "20px",
  textAlign: "center",
});

export default function Account() {
  return (
    <Container>
      <Title>ACCOUNT</Title>
      <Title>마음 전하실 곳</Title>
    </Container>
  );
}
