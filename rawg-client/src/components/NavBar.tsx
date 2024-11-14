import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <Text>Navbar</Text>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
