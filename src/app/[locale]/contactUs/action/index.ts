"use server";

import { revalidatePath } from "next/cache";

export async function postForm(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const data = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    company: formData.get("company")?.toString() || "",
    mobile: formData.get("mobile")?.toString() || "",
  };

  try {
    const res = await fetch(
      "https://app.oxygenstones.com/api/client/contact-form",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-cache",
      }
    );
    revalidatePath("/contactUs");
    return { message: `Added ` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}
