"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  disabled?: boolean;
};

export function SubmitButton({ disabled = false }: SubmitButtonProps) {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending || disabled}
      className="bg-blue-500 text-white p-2 flex items-center justify-center rounded disabled:bg-gray-400"
      type="submit"
    >
      {status.pending ? <Loader2 className="animate-spin" /> : "Submit"}
    </button>
  );
}
