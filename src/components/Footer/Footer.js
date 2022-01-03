import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Content>
      <p>© 2021 Stian Ihler Hermansen</p>
    </Content>
  );
};

export default Footer;

const Content = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 0rem 10rem;
  border-bottom: #dddddd solid 1px;
  box-shadow: inset 0px 1px 4px 0px rgb(0 0 0 / 10%);
  @media (max-width: 1000px) {
    text-align: center;
    padding: 0rem 4rem;
  }
`;
