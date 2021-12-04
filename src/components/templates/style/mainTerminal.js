import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: calc(100vh - 3rem);
  position: absolute;
  top: 3rem;
  left: 0;
`

export const MainSubContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: .8rem;
  background-color: #464646;
  background-image: url('/image-background-wolf-heaven.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
