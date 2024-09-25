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
    message:
      (formData.get("message")?.toString() || "") +
      ('\n mobileCompany"' + formData.get("mobileCompany")?.toString() || "") +
      ('\n companyWebsite"' + formData.get("companyWebsite")?.toString() ||
        "") +
      ('\n emailCompany"' + formData.get("emailCompany")?.toString() || ""),
    company: formData.get("company")?.toString() || "",
    mobile: formData.get("mobile")?.toString() || "",
  };

  try {
    console.log("asdad", data);
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
    console.log("asdad 1", res);

    revalidatePath("/products");
    return { message: `Added ` };
  } catch (e) {
    console.log("asdad 3", e);

    return { message: "Failed to create todo" };
  }
}
