import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function MainScreen() {
  return (
    <>
      <Button
        title="sdfsd"
        onPress={() => {
          signOut(auth)
            .then(() => {
              console.log("sign out");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />

      <Text>Hello</Text>
    </>
  );
}
