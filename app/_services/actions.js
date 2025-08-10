"use server";

export async function submitContactForm(formData) {
  try {
    const res = await fetch("https://formspree.io/f/xzzvypod", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    console.log("res=> ", res);
    if (!res.ok) throw new Error("Failed to submit contact form");
  } catch (error) {
    console.error(error);
  }
}
