import React from "react";

export const styles = {
  inputContainer: `relative`,
  inputLabel: "flex flex-col w-full ",
  inputText:
    "border-2 border-black outline-none rounded-md w-full p-1 outline-none transition hover:border-yellow focus:border-pink mb-3 bg-gradient-to-tr from-gray-100 to-white",
  inputTextarea:
    "max-w-full min-w-full w-full min-h-[4rem] max-h-[4rem] max-w-full ",
  inputLabelP: "text-lg mb-2",

  errorBox:
    "absolute bottom-[100%] mb-[-2rem] right-0 bg-black text-white rounded-full p-2 transition",
};

const TextInput = ({
  state,
  setState,
  validationCheck,
  name,
  type,
}: TextInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        <p className={styles.inputLabelP}>{name}</p>
      </label>

      {type == "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={`${styles.inputText} ${styles.inputTextarea} ${
            state.errorState == "hide" && validationCheck().err
              ? "border-red-400 "
              : "border-black"
          } `}
          value={state.value}
          onBlur={() =>
            setState({ ...state, errorState: "hide", firstFocus: false })
          }
          onFocus={() => setState({ ...state, errorState: "show" })}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          className={`${styles.inputText} ${
            state.errorState == "hide" && validationCheck().err
              ? "border-red-400 "
              : "border-black"
          } `}
          value={state.value}
          onBlur={() =>
            setState({ ...state, errorState: "hide", firstFocus: false })
          }
          onFocus={() => setState({ ...state, errorState: "show" })}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      )}

      <p
        className={`${styles.errorBox} ${
          state.errorState == "show" &&
          !state.firstFocus &&
          validationCheck().err
            ? "opacity-[1]"
            : "opacity-[0]"
        }`}
      >
        🚩
        {validationCheck().message}
      </p>
    </div>
  );
};

export default TextInput;
