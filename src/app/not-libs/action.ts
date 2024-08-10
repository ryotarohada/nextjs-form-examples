"use server";

export async function updateUser(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Created user with email: ${formData.get("email")}`);
}
