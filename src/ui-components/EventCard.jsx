/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function EventCard(props) {
  const { event, overrides, ...rest } = props;
  return (
    <View
      width="747px"
      height="194px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="9px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "EventCard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="60px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="683px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={event?.name}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="683px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="65px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={event?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="60px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="118px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={event?.datetime}
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <View
        width="8px"
        height="193px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="739px"
        borderRadius="0px 9px 9px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(125,214,232,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
    </View>
  );
}
