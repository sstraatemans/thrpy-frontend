import React from "react";
import { CardContainer, CardContent, CardTitle } from "./style";
type Props = {
  children: any,
  title?: string
};
const Card = (props: Props) => {
  const getTitle = () => {
    if (props.title) {
      return <CardTitle>{props.title}</CardTitle>;
    }
  };
  return (
    <CardContainer>
      <CardContent>
        {getTitle()}
        <p>{props.children}</p>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
