import React, { useState, useContext } from "react";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import TextInput, { styles } from "./TextInput";

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
                message: langEn ? "This field cannot be empty" : "Acest câmp nu poate fi gol",
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
            placeholder={
                langEn ? "Street, no. , sector (if it applies), ap..." : "Strada, nr. , sectorul (dacă este cazul), ap..."
            }
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
                message: langEn ? "This field cannot be empty" : "Acest câmp nu poate fi gol",
                err: true,
            };
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(shippingStateEmail.value)) {
            return {
                message: langEn ? "You must enter a valid email address" : "Trebuie să introduceți un e-mail valid",
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
            placeholder={"contact@email.com..."}
        />
    );
};

export const CheckoutPhoneInput = () => {
    const { langEn }: any = useContext(PrivacyContext);
    const [shippingStatePhone, setShippingStatePhone] = useState<FormState>({
        value: "",
        errorState: "",
        firstFocus: true,
    });

    const shippingValidationCheckPhone: FormValidationFunc = () => {
        if (shippingStatePhone.value.length < 10 || shippingStatePhone.value.length > 11) {
            return {
                message: langEn
                    ? "This field must have a proper phone number"
                    : "Acest câmp trebuie să aibă un număr de telefon valid",
                err: true,
            };
        } else if (!/^\d+$/.test(shippingStatePhone.value)) {
            return {
                message: langEn ? "You must enter a valid phone number" : "Trebuie să introduceți un număr de telefon valid",
                err: true,
            };
        } else {
            return { message: "", err: false };
        }
    };

    //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS
    return (
        <TextInput
            name={langEn ? "Phone" : "Telefon"}
            type="number"
            state={shippingStatePhone}
            setState={setShippingStatePhone}
            validationCheck={shippingValidationCheckPhone}
            placeholder={"0712345678..."}
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
                message: langEn ? "This field cannot be empty" : "Acest câmp nu poate fi gol",
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
            placeholder={langEn ? "First and last name..." : "Nume și prenume..."}
            customLabel={langEn ? "First and last name..." : "Nume și prenume..."}
        />
    );
};

export const CheckoutCityInput = () => {
    const { langEn }: any = useContext(PrivacyContext);
    const [state, setState] = useState<FormState>({
        value: "",
        errorState: "",
        firstFocus: true,
    });

    const validationCheck: FormValidationFunc = () => {
        if (state.value.length < 2) {
            return {
                message: langEn ? "This field cannot be empty" : "Acest câmp nu poate fi gol",
                err: true,
            };
        } else {
            return { message: "", err: false };
        }
    };

    //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS
    return (
        <TextInput
            name={langEn ? "City" : "Oraş"}
            state={state}
            setState={setState}
            validationCheck={validationCheck}
            placeholder={langEn ? "Your city..." : "Orașul..."}
        />
    );
};

export const CheckoutPostalCode = () => {
    const { langEn }: any = useContext(PrivacyContext);
    const [state, setState] = useState<FormState>({
        value: "",
        errorState: "",
        firstFocus: true,
    });

    const validationCheck: FormValidationFunc = () => {
        if (state.value.length != 6) {
            return {
                message: langEn ? "Enter a valid zip code" : "Introduceţi un cod valid",
                err: true,
            };
        } else {
            return { message: "", err: false };
        }
    };

    //   MUST NOT MODIFY NAMES. I WAS LAZY WITH TIHS
    return (
        <TextInput
            name={langEn ? "Zip Code" : "Cod Poştal"}
            state={state}
            setState={setState}
            validationCheck={validationCheck}
            type="number"
            placeholder={"123456..."}
        />
    );
};
