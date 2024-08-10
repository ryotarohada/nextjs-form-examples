import { FormHTMLAttributes } from "react";
import { Input } from "../Input";

type ExampleFormProps = {
  action: FormHTMLAttributes<HTMLFormElement>["action"];
};

export function ExampleForm({ action }: ExampleFormProps) {
  return (
    <form
      action={action}
      className="flex flex-col gap-4 border-gray-600 border px-6 py-4 rounded"
    >
      <h1>Example Form</h1>
      <Input placeholder="email" name="email" />
      <Input placeholder="password" type="password" name="password" />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}
