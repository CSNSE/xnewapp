/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteEvent } from "../graphql/mutations";
import { Button, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function EventCard(props) {
  const { event, overrides, ...rest } = props;
  const editButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${event?.id}`,
  });
  const deleteButtonOnClick = async () => {
    await client.graphql({
      query: deleteEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          id: event?.id,
        },
      },
    });
  };
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
      backgroundColor="rgba(255,255,255,1)"
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
        top="62px"
        left="22px"
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
        top="130px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={event?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        lineHeight="48px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={event?.datetime}
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <View
        width="9px"
        height="194px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="738px"
        borderRadius="0px 9px 9px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(125,214,232,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <View
        width="149px"
        height="2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="60px"
        left="18px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="22px"
        left="604px"
        backgroundColor="rgba(64,170,191,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Edit Event"
        onClick={() => {
          editButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Edit Button")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="130px"
        left="594px"
        backgroundColor="rgba(191,64,64,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete Event"
        onClick={() => {
          deleteButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Delete Button")}
      ></Button>
    </View>
  );
}
