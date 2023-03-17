type Checkbox = {
  name?: string;
  text: string;
  onChange?: any;
  checked?: boolean;
  disabled?: boolean;
};

export function Checkbox({
  name,
  text,
  onChange,
  checked,
  disabled,
}: Checkbox) {
  return (
    <>
      <div className="cb-custom-cls">
        <label>
          <input
            name={name}
            id={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <div />
          <p>{text}</p>
        </label>
      </div>
      <style jsx>{`
        .cb-custom-cls {
          display: inline-block;
        }

        .cb-custom-cls p {
          margin: none;
        }
        .cb-custom-cls label {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .cb-custom-cls label p {
          cursor: pointer;
        }
        .cb-custom-cls label input {
          display: none;
        }

        .cb-custom-cls label input[type="checkbox"]:checked + div {
          background-color: purple;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80.926' height='78.765' viewBox='0 0 80.926 78.765'%3E%3Cpath id='Path_1' data-name='Path 1' d='M-1116.945 322.36a7.5 7.5 0 0 1-6.316-3.456l-26.312-41.091a7.5 7.5 0 0 1 2.272-10.36 7.5 7.5 0 0 1 10.36 2.272l19.9 31.077 33.337-53.664a7.5 7.5 0 0 1 10.328-2.413 7.5 7.5 0 0 1 2.413 10.328l-39.612 63.764a7.5 7.5 0 0 1-6.32 3.542Z' transform='translate(1150.758 -243.595)' fill='%23fff'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: 70%;
          background-position: center;
        }

        .cb-custom-cls label input[type="checkbox"]:disabled + div {
          background-color: rgb(216, 216, 216);
          border-color: rgb(216, 216, 216);
          cursor: not-allowed;
        }

        .cb-custom-cls label div {
          transition: all 0.2s ease-in-out;
          width: 1rem;
          height: 1rem;
          border: 1px rgb(0, 0, 0) solid;
          border-radius: 2px;
          cursor: pointer;
        }

        .cb-custom-cls label:hover > div {
          border-color: purple;
        }

        .cb-custom-cls label:hover input[type="checkbox"]:checked + div {
          border-color: transparent;
        }

        .cb-custom-cls label:hover input[type="checkbox"]:disabled + div {
          border-color: rgb(216, 216, 216);
          cursor: not-allowed;
        }

        .cb-custom-cls label input[type="checkbox"]:disabled p {
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
