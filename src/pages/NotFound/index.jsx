import React from "react";
import Header from "../../components/Header";
import { Container, NotFoundImage, NotFoundText } from "./style";

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <NotFoundImage
          src="/icons/emoji-dizzy.svg"
          alt="not-found"
          height="200px"
          width="200px"
        />
        <NotFoundText>Página no encontrada</NotFoundText>
      </Container>
    </>
  );
};

export default NotFound;
