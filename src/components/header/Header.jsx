import { Button, IconButton, Pagination, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Moon } from "../../assets/icon/moon";
import { logo } from "../../assets/img/Picture";
import { Select1, Select2 } from "./select";
import { colors } from "../../config/site-config";
import { LoginI } from "../../assets/icon/login";
export default function Header() {
  const Paragraf = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
  `;
  const Nomer = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  `;
  return (
    <Container>
      <Stack direction={"row"} alignItems="center" gap={"218px"} justifyContent={'center'}>
        <Stack direction={"row"} alignItems="center" gap="36px">
          <img src={logo} alt="logo" />
          <Stack direction={"row"} alignItems="center" gap="32px">
            <Paragraf>Categories</Paragraf>
            <Paragraf>Categories</Paragraf>
            <Paragraf>Categories</Paragraf>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems="center" gap="24px">
          <Nomer>+1 855 420 0000</Nomer>
          <Button
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "100%",
              width: "45px",
              height: "60px",
            }}
          >
            <Moon />
          </Button>
          <Button variant="contained" endIcon={<LoginI />}>
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
