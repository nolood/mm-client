import { Spinner } from "@chakra-ui/react";
import { type FC } from "react";

const Loader: FC = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default Loader;
