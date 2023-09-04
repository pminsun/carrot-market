import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  name: string;
  kind?: "text" | "phone" | "price";
  register?: UseFormRegisterReturn;
  [key: string]: any;
  placeholderText?: string;
  required?: boolean;
}

export default function Input({
  label,
  name,
  kind,
  register,
  required,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        {kind === "text" ? (
          <input
            id={name}
            required={required}
            type={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        ) : null}
        {kind === "phone" ? (
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id={name}
              required={required}
              type={name}
              {...register}
              {...rest}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        ) : null}
        {kind === "price" ? (
          <div className="rounded-md relative flex items-center shadow-sm">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              {...register}
              required={required}
              id={name}
              className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
              <span className="text-gray-500 text-sm">USD</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
