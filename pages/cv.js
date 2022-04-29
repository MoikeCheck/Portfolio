import { Document } from "react-pdf";
import Container from "../components/Container";
import { AspectRatio } from "@chakra-ui/react";

const CV = () => {
  return (
    <Container>
      <AspectRatio ratio={16 / 9}>
        <iframe src="/assets/CV.pdf" />
      </AspectRatio>
    </Container>
  );
};

export default CV;
