import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card width="300px">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
