import styled from "@emotion/styled";
import IMG_INVITATION from "../assets/images/invitation1.png";

const Container = styled.div({});

const InvitationArea = styled.div({
  padding: "40px 0 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled.p({
  fontSize: "20px",
});

const InvitationImg1 = styled.img({
  width: "167px",
  height: "154px",
  margin: "20px 0 30px",
});

const SubTitle = styled.p({
  fontSize: "24px",
  marginBottom: "16px",
});

const Description = styled.p({
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "25px",
  marginBottom: "40px",

  span: {
    fontSize: "20px",
    fontWeight: "600",
  },
});

// const InvitationImg2 = styled.img({
//   width: "100%",
// });

const NameText1 = styled.p({
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "16px",
});
const NameText2 = styled.p({
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "30px",
});

export default function Invitation() {
  return (
    <Container>
      <InvitationArea>
        <Title>INVITATION</Title>

        <InvitationImg1 src={IMG_INVITATION} alt="초대 이미지" />

        <SubTitle>소중한 분들을 초대합니다</SubTitle>

        <Description>
          그저 존<span>재</span>만으로 전부가 되어준 내 사람과
          <br />
          연분홍빛 <span>훈</span>풍에 봄 꽃잎이 흐드러지는 풍경 속,
          <br />
          삶의 이<span>유</span>가 되어주는 부부로 거듭나는날.
          <br />
          작은 목소<span>리</span>에도 귀기울이고 마음을 기울이며
          <br />
          <br />
          영원토록 늘 함께임을 약속하려합니다.
          <br />
          <br />
          축하가 깃든 귀한 발걸음을 해주시면 감사하겠습니다.
        </Description>

        <div
          style={{
            width: "100%",
            height: "250px",
            background: "#ddd",
            marginBottom: "20px",
          }}
        >
          이미지 넣을 곳
        </div>

        <NameText1>정동일 ❤ 정혜자의 아들 정재훈</NameText1>
        <NameText2>허정 ❤ 양금란의 딸 허유리</NameText2>
      </InvitationArea>
    </Container>
  );
}
