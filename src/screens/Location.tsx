import styled from "@emotion/styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ICO_NMAP from "../assets/icons/n-map.webp";
import ICO_KMAP from "../assets/icons/k-map.png";
import ICO_TMAP from "../assets/icons/t-map.webp";

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

const MoveMapArea = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ddd",
});

const MoveMapItem = styled.div({
  width: "100%",
  padding: "15px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const MoveMapIcon = styled.img({
  width: "16px",
  height: "16px",
  borderRadius: "5px",
  objectFit: "cover",
  marginRight: "4px",
});
const MoveMapText = styled.p({});

const TransPortationArea = styled.div({
  padding: "20px 16px 12px",
});

const TransPortationItem = styled.div({
  marginBottom: "16px",
});
const TransPortationTitle = styled.p({
  fontSize: "16px",
  marginBottom: "8px",
});

const SubwayItem = styled.div({
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
  marginBottom: "4px",
});
const Dot = styled.div({
  width: "12px",
  height: "12px",
  borderRadius: "8px",
  marginRight: "8px",
});

const BusCarItem = styled.div({
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
  marginBottom: "4px",
});

const BusCarTitle = styled.p({
  marginBottom: "8px",
});

export default function Location() {
  return (
    <Container>
      <Title>LOCATION</Title>
      <SubTitle>오시는 길</SubTitle>

      <Map
        center={{ lat: 37.55263925972441, lng: 126.93768626057455 }}
        style={{ width: "100%", height: "350px" }}
        level={3}
        zoomable
      >
        <MapMarker
          position={{ lat: 37.55263925972441, lng: 126.93768626057455 }}
        />
      </Map>

      <MoveMapArea>
        <MoveMapItem>
          <MoveMapIcon src={ICO_NMAP} />
          <MoveMapText>네이버 지도</MoveMapText>
        </MoveMapItem>
        <p>|</p>
        <MoveMapItem>
          <MoveMapIcon src={ICO_KMAP} />
          <MoveMapText>카카오 네비</MoveMapText>
        </MoveMapItem>
        <p>|</p>
        <MoveMapItem>
          <MoveMapIcon src={ICO_TMAP} />
          <MoveMapText>티맵</MoveMapText>
        </MoveMapItem>
      </MoveMapArea>
      <TransPortationArea>
        <TransPortationItem>
          <TransPortationTitle>🚊 지하철 이용시</TransPortationTitle>

          <SubwayItem>
            <Dot style={{ backgroundColor: "#05A13E" }} />
            <p>2호선 신촌역 6번출구 ➡️ 서강대 방면 150m</p>
          </SubwayItem>
          <SubwayItem>
            <Dot style={{ backgroundColor: "#B45D18" }} />
            <p>6호선 대흥역 1번출구 ➡️ 서강대 방면 600m</p>
          </SubwayItem>
          <SubwayItem>
            <Dot style={{ backgroundColor: "#69CBCB" }} />
            <p>경의중앙선 서강대역 1번출구 ➡️ 서강대 방면 200m</p>
          </SubwayItem>
        </TransPortationItem>
        <TransPortationItem>
          <TransPortationTitle>🚌 버스 이용시</TransPortationTitle>

          <BusCarTitle>▪️ 신촌로타리 또는 서강대학교 정류장 하차</BusCarTitle>
          <BusCarItem>
            <p>
              <span style={{ color: "#386DE8" }}>간선버스</span> 163, 604, 740,
              753
            </p>
          </BusCarItem>
          <BusCarItem>
            <p>
              <span style={{ color: "#3CC344" }}>지선버스</span> 5713, 5714,
              6716, 7016, 7613
            </p>
          </BusCarItem>
          <BusCarItem style={{ marginBottom: "12px" }}>
            <p>
              <span style={{ color: "#87C700" }}>마을버스</span> 마포10, 마포11,
              마포12
            </p>
          </BusCarItem>

          <BusCarTitle>
            ▪️ 신촌오거리, 2호선 신촌역(중앙차로) 정류장 하차
          </BusCarTitle>
          <BusCarItem>
            <p>
              <span style={{ color: "#386DE8" }}>간선버스</span> 270, 271, 273,
              602, 603, 721
            </p>
          </BusCarItem>
          <BusCarItem>
            <p>
              <span style={{ color: "#3CC344" }}>지선버스</span> 7011, 7611,
              7713
            </p>
          </BusCarItem>
          <BusCarItem>
            <p>
              <span style={{ color: "#FB5852" }}>광역좌석</span> 1000, 1100,
              1101, 1200, 1300, 1301, 1302, 1601
            </p>
          </BusCarItem>
        </TransPortationItem>
        <TransPortationItem>
          <TransPortationTitle>🚘 자가용 이용시</TransPortationTitle>

          <BusCarTitle>▪️ 네비게이션 : ‘케이터틀' 입력</BusCarTitle>
          <BusCarItem style={{ marginBottom: "12px" }}>
            <p>
              주소검색 : ‘서울시 마포구 백범로 23’ 또는
              <br /> ‘서울시 마포구 신수동 63-14’ 검색
            </p>
          </BusCarItem>
          <BusCarTitle>▪️ 주차장 안내</BusCarTitle>
          <BusCarItem>
            <p>케이터틀 정문(스타벅스쪽) 우측 주차장 이용 (지상, 지하)</p>
          </BusCarItem>
        </TransPortationItem>
      </TransPortationArea>
    </Container>
  );
}
