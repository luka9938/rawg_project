import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box w="300px" overflow={"hidden"} borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
