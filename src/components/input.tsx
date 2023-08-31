interface InputProps {
  label?: string;
  idText?: string;
  kind?: "email" | "text" | "phone" | "price" | "number";
  placeholderText?: string;
}

export default function Input({ label, idText, kind }: InputProps) {
  return (
    <>
      <label htmlFor={idText} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        {
          <input
            id={idText}
            type={kind}
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        }
        {
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              type="number"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        }
      </div>
    </>
  );
}
