import styled from "styled-components";
import GlobalStyles from "./Globalstyles";
import { useEffect, useState } from "react";
import { call_api } from "./api";

const TopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 95%;
  height: 10%;
  border-top: 10px solid black;
  border-bottom: 10px solid black;
`;

const Title = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 0;
  margin-left: auto;
  margin-bottom: 0;
  font-family: "Pirata One", cursive;
`;

const TodayDate = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 100px;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MainImg = styled.img`
  width: 40%;
  height: 70%;
  border-radius: 5px;
`;

const MainContainer = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  border-top: 7px solid black;
  border-bottom: 7px solid black;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-family: "Pirata One", cursive;
`;

const MainText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

function App() {
  const [result, setResult] = useState({});

  useEffect(() => {
    call_api().then((data) => {
      setResult(data);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <TopContainer>
        {/* 제목 */}
        <HeaderContainer>
          <Title>Today’s Astronomy Picture</Title>
          <TodayDate>{result.date}</TodayDate>
        </HeaderContainer>

        {/* 메인 콘텐츠 */}
        <ContentContainer>
          <MainImg src={result.url} />
          <MainContainer>
            <MainTitle>{result.title}</MainTitle>
            <MainText>{result.explanation}</MainText>
          </MainContainer>
        </ContentContainer>
      </TopContainer>
    </>
  );
}

export default App;
