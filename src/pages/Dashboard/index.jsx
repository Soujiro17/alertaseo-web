import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import { CardImg, Container, Descripcion, Title } from "./style";
import Card from "../../components/Card";
import images from "../../data/images";

const Dashboard = () => {
  return (
    <AccountLayout>
      <Container>
        <Card activeHover disableFlex height="100%" width="100%">
          <Title>Introducción</Title>
          <CardImg src={images.dashboardIntroduccion} alt="introduccion" />
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
        <Card activeHover disableFlex height="100%" width="100%">
          <Title>Registros</Title>
          <CardImg src={images.dashboardRegistros} alt="introduccion" />
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
        <Card activeHover disableFlex height="100%" width="100%">
          <Title>Rutas</Title>
          <CardImg src={images.dashboardRutas} alt="introduccion" />
          <Descripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
            saepe unde ad ipsam iste inventore natus incidunt atque recusandae
            temporibus facere debitis, placeat at dolor repudiandae. Ipsum,
            architecto perferendis?
          </Descripcion>
        </Card>
      </Container>
    </AccountLayout>
  );
};

export default Dashboard;
