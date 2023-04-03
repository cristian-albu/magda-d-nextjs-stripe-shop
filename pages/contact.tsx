import React, { useContext, useState } from "react";
import Section from "@/components/Section";
import TextInput from "@/components/TextInput";
import Wrapper from "@/components/Wrapper";
import { Checkbox } from "@/components/Checkbox";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import DynamicHead from "@/components/DynHead";

const ContactPage = () => {
  const [mailSentSuccess, setMailSentSuccess] = useState(false);

  //? Name input
  const [nameState, setNameState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const nameInvalidCheck: FormValidationFunc = () => {
    if (nameState.value.length < 1) {
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

  //? Email input
  const [emailState, setEmailState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const emailInvalidCheck: FormValidationFunc = () => {
    if (emailState.value.length < 2) {
      return {
        message: langEn
          ? "This field cannot be empty"
          : "Acest câmp nu poate fi gol",
        err: true,
      };
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailState.value)
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

  //? Message input input

  const [messageState, setMessageState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const messageInvalidCheck: FormValidationFunc = () => {
    if (messageState.value.length < 10) {
      return {
        message: langEn
          ? "Your message is too short"
          : "Mesajul ar trebui să fie puțin mai lung",
        err: true,
      };
    } else if (messageState.value.length > 500) {
      return {
        message: langEn
          ? "Your message is too long"
          : "Mesajul tău este prea lung",
        err: true,
      };
    } else {
      return { message: "", err: false };
    }
  };

  // ? Handle checkbox state

  const [checkboxState, setCheckboxState] = useState(false);

  const {
    setCookiePref,
    setCookieAnalytics,
    openPrivacy,
    langEn,
    handleSave,
  }: any = useContext(PrivacyContext);

  // ? Handle form error state

  const [generalError, setGeneralError] = useState(false);
  // ? Handle the email submit

  const handleCheckbox = () => {
    checkboxState;
    setCheckboxState((checkboxState) => !checkboxState);

    if (!checkboxState === true) {
      setCookiePref(true);
      setCookieAnalytics(true);
    }
  };
  async function handleSubmit(e: any) {
    e.preventDefault();

    const sendContactForm = async (data: any) =>
      await fetch("/api/contactMail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

    if (
      !nameInvalidCheck().err &&
      !emailInvalidCheck().err &&
      !messageInvalidCheck().err &&
      checkboxState
    ) {
      const emailPayload: ContactMailPayload = {
        name: nameState.value,
        email: emailState.value,
        message: messageState.value,
      };
      setCookiePref(true);
      setCookieAnalytics(true);
      handleSave();
      sendContactForm(emailPayload);
      setMailSentSuccess(true);
    } else {
      console.log("something went wrong");
      setGeneralError(true);
    }
  }

  return (
    <>
      <DynamicHead
        title="Contact"
        description="Trimite un mesaj"
        image="https://magdadimitrescu.com/assets/magda_dimitrescu_01.jpg"
      />
      <div className="relative min-h-[90vh] w-full bg-gray-100 secondaryGradient">
        <div className="mainGradient w-full md:w-[66%]" />

        <Section>
          <Wrapper>
            <div className="flex w-full items-center justify-between relative flex-wrap">
              <div className="w-full md:w-1/2  flex flex-col text-white md:pr-[5rem] items-start">
                <div className="text-5xl text-white mb-5">
                  <BiMessageDetail />
                </div>

                <h1 className="text-2xl md:text-5xl mb-5 ">
                  {langEn
                    ? "Send me a message or find me here:"
                    : `Trimite un mesaj sau găseşte-mă aici:`}
                </h1>
                <div className="flex gap-5 flex-wrap">
                  <a
                    href="https://www.facebook.com/magda.dimitrescu"
                    rel="noopener nereferrer"
                    target="_blank"
                    className="btnPrimary mb-5"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/magda.dimitrescu/?fbclid=IwAR3IDDR9Zo2hpGY0H7XzrgS5jYOR_NU4LrGr6ABxtC8WlWn5AVZLqPiAGlM"
                    rel="noopener nereferrer"
                    target="_blank"
                    className="btnPrimary mb-5"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@magdadimitrescu2936"
                    rel="noopener nereferrer"
                    target="_blank"
                    className="btnPrimary mb-5"
                  >
                    YouTube
                  </a>
                </div>
              </div>
              {!mailSentSuccess && (
                <div className="w-full  md:w-1/2 flex justify-center items-center">
                  <form
                    className=" p-[8px] shadow-black/40 shadow-2xl bg-gradient-to-tr from-pink to-yellow rounded-lg w-full max-w-[500px]  mb-[3rem]"
                    method="post"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="w-full h-full flex flex-col p-[1rem] md:p-[2rem] bg-white rounded-md">
                      <TextInput
                        name={langEn ? "Name*" : "Nume*"}
                        state={nameState}
                        setState={setNameState}
                        validationCheck={nameInvalidCheck}
                      />
                      <TextInput
                        name={langEn ? "Email*" : "Email*"}
                        state={emailState}
                        setState={setEmailState}
                        validationCheck={emailInvalidCheck}
                      />
                      <TextInput
                        name={langEn ? "Message*" : "Mesaj*"}
                        state={messageState}
                        setState={setMessageState}
                        validationCheck={messageInvalidCheck}
                        type="textarea"
                      />
                      <div className="flex flex-wrap item-center gap-1">
                        <Checkbox
                          name="contactCheckBox"
                          text={
                            langEn ? "I agree with the " : "Sunt de acord cu"
                          }
                          checked={checkboxState}
                          onChange={handleCheckbox}
                        />

                        <button onClick={openPrivacy} className="text-purple">
                          {langEn
                            ? "Privacy policy"
                            : "Politica de confidenţialitate*"}
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center justify-between">
                        {generalError && (
                          <p className="text-red-400">
                            {langEn
                              ? "You must fill all the required fields"
                              : "Trebuie să completaţi toate câmpurile"}
                          </p>
                        )}
                        <button
                          className="btnPrimary2 ml-auto"
                          type="submit"
                          name="submit"
                        >
                          <BiMessageDetail />
                          {langEn ? "Send" : "Trimite"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {mailSentSuccess && (
                <div className="bg-white p-[2rem] shadow-black/20 shadow-2xl rounded-md w-full  md:w-1/2 mb-[3rem] flex justify-center items-center flex-col">
                  <p className="text-2xl">✅</p>
                  <p className="text-2xl mb-5">
                    {langEn
                      ? "Your message has been sent successfuly"
                      : "Mesajul tău a fost trimis cu success"}
                  </p>
                  <Link href={"/"} className="btnPrimary2">
                    {langEn
                      ? "Go to the home page"
                      : "Mergi înapoi pe prima pagină"}
                  </Link>
                </div>
              )}
            </div>
          </Wrapper>
        </Section>
      </div>
    </>
  );
};

export default ContactPage;
