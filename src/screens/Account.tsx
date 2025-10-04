import styled from "@emotion/styled";

const Container = styled.div({
  padding: "30px 0",
});

const Title = styled.p({
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "12px",
});
const SubTitle = styled.p({
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "20px",
});

export default function Account() {
  return (
    <Container>
      <Title>ACCOUNT</Title>
      <SubTitle>마음 전하실 곳</SubTitle>
    </Container>
  );
}
