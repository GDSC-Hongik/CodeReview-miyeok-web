import Header from "../components/Header.jsx";
import styled from "styled-components";

const Br = styled.div`
  padding-top: 80px;
`;

const SearchResult = styled.section`
  font-size: 24px;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  display: flex;
  padding: 10px;
`;

const Container = styled.section`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  width: 90%;
  border: 1px lightgray;
  margin: 60px auto 0;
`;

const CompareTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
`;

const TopCompare = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  gap: 50px;
  margin-bottom: 50px;
`;

const CompareBox1 = styled.section`
  height: 250px;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const CompareBox2 = styled.section`
  height: 250px;
  width: 50%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const CompareTogether = styled.section`
  height: 250px;
  width: 90%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const Compare = () => {
  return (
    <>
      <Header />
      <Br></Br>
      <SearchResult>
        <div>
          <b>
            <q>자바</q>검색결과
          </b>
        </div>
      </SearchResult>
      <Container>
        <CompareTitle>강좌 비교</CompareTitle>
        <TopCompare>
          <CompareBox1>
            <div>1번째 강좌</div>
          </CompareBox1>
          <CompareBox2>
            <div>2번째 강좌</div>
          </CompareBox2>
        </TopCompare>
        <CompareTogether>
          <div>두 강좌 비교하기</div>
        </CompareTogether>
      </Container>
      <div>컴페어</div>
    </>
  );
};

export default Compare;
