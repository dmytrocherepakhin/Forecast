import React from "react";
import styled from "styled-components";

function NotFound(): JSX.Element {
  const Container = styled.div`
    text-align: center;
  `;

  return (
    <Container>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </Container>
  );
}

export default NotFound;
