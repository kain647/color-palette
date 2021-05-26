import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  //user-select: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: start;
    width: 100%;
    min-height: 100vh;
  }
  .textRight {
    text-align: right;
  }
`;
export const TitleProject = styled.h1`
  display: flex;
  font-family: "Josefin Sans", sans-serif;
  width: 100%;
  flex-direction: row;
  color: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 1.1;
`;
export const TabsBox = styled.div`
  display: flex;
  height: 61px;
  align-items: flex-end;
  flex-direction: row;
  padding: 0px 10px 0px 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcdc;
  padding: 20px;
  background-color: #fff;
  text-transform: uppercase;
  //overflow-y: scroll;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
export const Tab = styled.div`
  display: flex;
  cursor: pointer;
  background: ${({ label }) => label};
  margin-right: 1px;
  width: 50px;
  height: ${({ active }) => (active ? "60px" : "50px")};
  border-radius: ${({ active }) => (active ? "10px 10px 0 0" : "0 0 0 0")};
  box-shadow: ${({ active }) =>
    active ? "none" : "8px 12px 25px 2px rgb(0 0 0 / 40%)"};
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  //transform: translateY(20px);
  @media screen and (max-width: 768px) {
    margin-bottom: 1px;
    justify-content: center;
    margin-right: 0;
    :last-child {
      margin-bottom: 0;
    }
  }
  &:hover {
    //height: 55px;
  }
`;
export const TitleContent = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 40px;
`;
export const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
export const ColorBox = styled.div`
  display: flex;
  height: 100px;
  width: 160px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
