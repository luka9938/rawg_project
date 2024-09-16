import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

function GenreList() {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </>
  );
}

export default GenreList;
