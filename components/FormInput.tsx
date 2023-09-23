interface Props {
  label?: string;
  inputID?: string;
  required?: boolean;
  placeholder?: string;
  extraLabelClasses?: string;
  extraInputClasses?: string;
  type?: React.HTMLInputTypeAttribute;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

const FormInput: React.FC<Props> = ({
  type,
  inputID,
  inputRef,
  required,
  inputMode,
  label = '',
  placeholder,
  extraInputClasses,
  extraLabelClasses,
}) => {
  return (
    <label htmlFor={inputID} className={`block ${extraLabelClasses}`}>
      {label}
      <input
        type={type}
        id={inputID}
        ref={inputRef}
        spellCheck='false'
        required={required}
        inputMode={inputMode}
        placeholder={placeholder}
        className={`rounded border text-[16px] font-normal w-full bg-[rgba(255,255,255,0.03)] text-white placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] pt-[13px] pb-[14px] px-[29px] mt-[34px] outline-none phones:mt-1.5 phones:text-[13px] phones:font-normal ${extraInputClasses}`}
      />
    </label>
  );
};

export default FormInput;
