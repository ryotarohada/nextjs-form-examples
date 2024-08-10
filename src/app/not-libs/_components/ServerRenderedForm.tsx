import { fetchUser } from "@/libs/fetchUser";
import { updateUser } from "../action";
import { Input } from "@/components";
import { SubmitButton } from "./SubmitButton";

export async function ServerRenderedForm() {
  const user = await fetchUser();

  return (
    <form
      action={updateUser}
      className="w-full flex flex-col gap-6 border-gray-600 border p-6 rounded"
    >
      <div className="flex flex-col gap-2">
        <Input
          placeholder="first name"
          label="First Name"
          name="name"
          defaultValue={user.name}
          required
        />
        <Input
          placeholder="last name"
          label="Last Name"
          name="username"
          defaultValue={user.username}
          required
        />
        <Input
          placeholder="email"
          label="Email"
          name="email"
          defaultValue={user.email}
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}
