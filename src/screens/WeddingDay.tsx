import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import IMG_WEDDINGDAY from "../assets/images/weddingday-heart.png";

const Container = styled.div({
  padding: "30px 20px",
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

const CalendarArea = styled.div({
  borderTop: "1px solid #d9d9d9",
  borderBottom: "1px solid #d9d9d9",
  padding: "10px 0",
  marginBottom: "24px",
});

const CalendarWeeks = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
});
const CalendarWeeksItem = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0",
  color: "#5c5c5c",
});

const CalendarDays = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
});
const CalendarDaysItem = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0",
  color: "#5c5c5c",
  position: "relative",
});
const WeddingDayImage = styled.img({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "32px",
  heigh: "auto",
  opacity: 0.7,
  transform: "translate(-50%,-50%)",
  zIndex: -1,
});
const TimeArea = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
  columnGap: "10px",
});
const TimeItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const TimeTile = styled.p({
  fontSize: "12px",
  color: "#2b2222",
  textAlign: "center",
  marginBottom: "8px",
});
const TimeNumber = styled.p({
  fontSize: "22px",
  color: "#2b2222",
  textAlign: "center",
});
const DaysAgoArea = styled.div({
  textAlign: "center",
});
const DaysAgoText = styled.p({
  textAlign: "center",
  fontSize: "18px",
});

export default function WeddingDay() {
  const daysInMonth = 31; // 2026년 3월은 31일까지
  // const firstDayOfWeek = 0; // 2026년 3월 1일은 일요일 (0부터 일요일, 1부터 월요일, ..., 6부터 토요일)
  // const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // 남은 시간 상태를 저장하는 객체 초기화
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const currentDate: any = new Date();
      const targetDate: any = new Date("2026-03-21T13:30:00+0900");
      // const targetDate: any = new Date("2025-10-05T13:30:00+0900");
      const timeDiff = targetDate - currentDate;

      if (timeDiff > 0) {
        // 남은 시간 계산
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // 이벤트가 지났다면, 모든 값이 0이 되도록 설정
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // 1초마다 updateTimer를 호출하여 남은 시간을 업데이트
    const timer = setInterval(updateTimer, 1000);

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Title>WEDDING DAY</Title>
      <SubTitle>2026. 03. 21 토요일 오후 1시 30분</SubTitle>

      <CalendarArea>
        <CalendarWeeks>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <CalendarWeeksItem key={day}>{day}</CalendarWeeksItem>
          ))}
        </CalendarWeeks>
        <CalendarDays>
          {/* {emptyDays.map((_, index) => (
            <div key={_}></div>
          ))} */}
          {days.map((day) => (
            <CalendarDaysItem key={day}>
              <p>{day}</p>
              {day === 21 && <WeddingDayImage src={IMG_WEDDINGDAY} />}
            </CalendarDaysItem>
          ))}
        </CalendarDays>
      </CalendarArea>

      <TimeArea>
        <TimeItem>
          <TimeTile>DAYS</TimeTile>
          <TimeNumber>{timeLeft.days}</TimeNumber>
        </TimeItem>
        <p>:</p>
        <TimeItem>
          <TimeTile>HOUR</TimeTile>
          <TimeNumber>{timeLeft.hours}</TimeNumber>
        </TimeItem>
        <p>:</p>
        <TimeItem>
          <TimeTile>MIN</TimeTile>
          <TimeNumber>{timeLeft.minutes}</TimeNumber>
        </TimeItem>
        <p>:</p>
        <TimeItem>
          <TimeTile>SEC</TimeTile>
          <TimeNumber>{timeLeft.seconds}</TimeNumber>
        </TimeItem>
      </TimeArea>
      <DaysAgoArea>
        <DaysAgoText>
          재훈 ♥ 유리의 결혼식<span>{timeLeft.days}일</span> 전
        </DaysAgoText>
      </DaysAgoArea>
    </Container>
  );
}
