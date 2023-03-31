import React, { useState, useContext } from "react";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import TextInput from "./TextInput";

export const CheckoutShippingInput = () => {
  const { langEn }: any = useContext(PrivacyContext);
  const [shippingStateAdrs, setShippingStateAdrs] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const shippingValidationCheckAdrs: FormValidationFunc = () => {
    if (shippingStateAdrs.value.length < 10) {
      return {
        message: langEn
          ? "This field cannot be empty"
          : "Acest câmp nu poate fi gol",
        err: true,
      };
    } else {
      return { message: "", err: false };
    }
  };

  //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS

  return (
    <TextInput
      name={langEn ? "Address" : "Adresa"}
      state={shippingStateAdrs}
      setState={setShippingStateAdrs}
      validationCheck={shippingValidationCheckAdrs}
      type="textarea"
    />
  );
};

export const CheckoutEmailInput = () => {
  const { langEn }: any = useContext(PrivacyContext);
  const [shippingStateEmail, setShippingStateEmail] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const shippingValidationCheckEmail: FormValidationFunc = () => {
    if (shippingStateEmail.value.length < 2) {
      return {
        message: langEn
          ? "This field cannot be empty"
          : "Acest câmp nu poate fi gol",
        err: true,
      };
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        shippingStateEmail.value
      )
    ) {
      return {
        message: langEn
          ? "You must enter a valid email address"
          : "Trebuie să introduceți un e-mail valid",
        err: true,
      };
    } else {
      return { message: "", err: false };
    }
  };

  //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS
  return (
    <TextInput
      name="Email"
      state={shippingStateEmail}
      setState={setShippingStateEmail}
      validationCheck={shippingValidationCheckEmail}
    />
  );
};

export const CheckoutNameInput = () => {
  const { langEn }: any = useContext(PrivacyContext);
  const [shippingStateName, setShippingStateName] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const shippingValidationCheckName: FormValidationFunc = () => {
    if (shippingStateName.value.length < 1) {
      return {
        message: langEn
          ? "This field cannot be empty"
          : "Acest câmp nu poate fi gol",
        err: true,
      };
    } else {
      return { message: "", err: false };
    }
  };

  //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS
  return (
    <TextInput
      name={langEn ? "Name" : "Nume"}
      state={shippingStateName}
      setState={setShippingStateName}
      validationCheck={shippingValidationCheckName}
    />
  );
};
