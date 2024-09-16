import { Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "windows":
        return FaWindows;
      case "playstation":
        return FaPlaystation;
      case "xbox":
        return FaXbox;
      case "mac":
        return FaApple;
      case "linux":
        return FaLinux;
      case "android":
        return FaAndroid;
      default:
        return FaWindows;
    }
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={getIcon(platform.slug)} />
      ))}
    </>
  );
};

export default PlatformIconsList;
