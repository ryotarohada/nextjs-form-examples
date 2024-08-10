import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, errorMessage, ...rest }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <input
        {...rest}
        className="w-full border border-gray-600 rounded px-2 py-1"
      />
      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
