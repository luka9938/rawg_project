import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch 
      onChange={toggleColorMode} colorScheme="green" isChecked={colorMode === 'dark'}></Switch>
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorMode;