import React, { useState, Fragment } from "react";
import { dummyBoutiques } from "../constants/mocks";
import Button from "../shared/components/button";
import Card from "../shared/components/card";
import CardWrapper from "../shared/components/cardWrapper";
import Container from "../shared/components/container";
import Header from "../shared/components/header";
import Wrapper from "../shared/components/wrapper";

const ListingPage = () => {
  const [data, setData] = useState(dummyBoutiques);
  const handleCallButton = (id) => {
    console.log("Call Clicked", id);
  };
  return (
    <Container>
      <Wrapper>
        <Header companyName="Book My Boutique" />
        <CardWrapper>
          {data.map((d) => {
            const { id, name, boutique_logo } = d;
            return (
              <Fragment key={id}>
                <Card image={boutique_logo} title={name}>
                  <Button onClick={() => handleCallButton(id)}>Call Now</Button>
                </Card>
              </Fragment>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default ListingPage;
