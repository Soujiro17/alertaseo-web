import React from "react";
import { useOutletContext } from "react-router-dom";
import Input from "../../shared/Input";
import Card from "../Card";
import { Container, EditForm } from "./style";

const RegistroEdit = () => {
  const { value } = useOutletContext();

  return (
    <Container>
      <EditForm>
        <Card width="100%">
          <Input />
        </Card>
      </EditForm>
    </Container>
  );
};

export default RegistroEdit;
