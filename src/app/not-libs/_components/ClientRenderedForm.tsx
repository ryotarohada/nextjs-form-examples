"use client";

import { toast } from "react-toastify";
import { updateUser } from "../action";
import { useEffect, useState } from "react";
import { Input } from "@/components";
import { SubmitButton } from "./SubmitButton";

export function ClientRenderedForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nameFieldErrorMessage, setNameFieldErrorMessage] = useState("");
  const [usernameFieldErrorMessage, setUsernameFieldErrorMessage] =
    useState("");
  const [emailFieldErrorMessage, setEmailFieldErrorMessage] = useState("");
  const isValid =
    !nameFieldErrorMessage &&
    !usernameFieldErrorMessage &&
    !emailFieldErrorMessage;

  async function fetchUser() {
    const fetchedUser = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await fetchedUser.json();
    return user;
  }

  async function action(formData: FormData) {
    if (
      nameFieldErrorMessage ||
      usernameFieldErrorMessage ||
      emailFieldErrorMessage
    ) {
      return;
    }
    try {
      await updateUser(formData);
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Failed to update user");
    }
  }

  useEffect(() => {
    fetchUser().then((user) => {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
    });
  }, []);

  return (
    <form
      action={action}
      className="w-full flex flex-col gap-6 border-gray-600 border p-6 rounded"
    >
      <div className="flex flex-col gap-2">
        <Input
          placeholder="first name"
          label="First Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => {
            if (!e.target.value?.trim()) {
              setNameFieldErrorMessage("Invalid email");
              return;
            }
            setNameFieldErrorMessage("");
          }}
          errorMessage={nameFieldErrorMessage}
        />
        <Input
          placeholder="last name"
          label="Last Name"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={(e) => {
            if (!e.target.value?.trim()) {
              setUsernameFieldErrorMessage("Invalid email");
              return;
            }
            setUsernameFieldErrorMessage("");
          }}
          errorMessage={usernameFieldErrorMessage}
        />
        <Input
          placeholder="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => {
            if (!e.target.value?.trim()) {
              setEmailFieldErrorMessage("Invalid email");
              return;
            }
            setEmailFieldErrorMessage("");
          }}
          errorMessage={emailFieldErrorMessage}
        />
      </div>
      <SubmitButton disabled={!isValid} />
    </form>
  );
}
