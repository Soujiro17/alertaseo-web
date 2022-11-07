import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import { Container, Descripcion, Title } from "./style";
import Card from "../../components/Card";

const Dashboard = () => {
  return (
    <AccountLayout>
      <Container>
        <Card disableFlex height="100%" width="100%">
          <Title>Introducción</Title>
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
        <Card disableFlex height="100%" width="100%">
          <Title>Registros</Title>
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
        <Card disableFlex height="100%" width="100%">
          <Title>Introducción</Title>
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
      </Container>
      {/* <Title>Bienvenido a AlertAseo</Title> */}
    </AccountLayout>
  );
};

export default Dashboard;
