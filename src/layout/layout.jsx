import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { Main } from "../components/main/Main";

export default function Layaut() {
  const Headerr = styled.header`
    padding: 18px 120px;
    border-bottom: 1.5px solid #E5E7EA;
    margin-bottom: 20px;
  `;
  return (
    <>
      <Headerr>
        <Header />
      </Headerr>
      <main>
        <Main />
      </main>
    </>
  );
}
