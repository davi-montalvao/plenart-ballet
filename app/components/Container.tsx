"use client";

import styled from "styled-components";

const Container = styled.div<{ $center?: boolean; $wide?: boolean }>`
  max-width: ${(p) => (p.$wide ? "80rem" : "72rem")};
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  ${(p) => (p.$center ? "text-align: center;" : "")}

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export default Container;
