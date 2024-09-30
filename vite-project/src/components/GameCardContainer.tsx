import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
