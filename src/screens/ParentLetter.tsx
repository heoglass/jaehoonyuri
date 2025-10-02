import styled from "@emotion/styled";

const Container = styled.div({
  backgroundColor: "#FDFFCD",
  padding: "30px 0",
});

export default function ParentLetter() {
  return (
    <Container>
      <p>부모님 편지</p>
    </Container>
  );
}
