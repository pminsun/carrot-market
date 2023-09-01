interface TextAreaProps {
  label?: string;
  idText?: string;
  placeholderText?: string;
  [key: string]: any;
}

export default function TextArea({
  label,
  idText,
  placeholderText,
  ...rest
}: TextAreaProps) {
  return (
    <>
      {label ? (
        <label
          htmlFor={idText}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={idText}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        placeholder={placeholderText}
        {...rest}
      />
    </>
  );
}
