import { Resend } from "resend";
import { redirect } from "next/navigation";

export const SendEmail = async (formData: FormData) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing or undefined.");
  }
  const resend = new Resend(apiKey);

  const message = formData.get("message");
  const name = formData.get("name");
  const senderEmail = formData.get("SenderEmail");
  if (!message) {
    return { error: "Invalid message" };
  }
  await resend.emails.send({
    from: "Portfolio website Contact Form <onboarding@resend.dev>",
    to: "abhijitjha1801@gmail.com",
    subject: `${name} From Portfolio website contact form.`,
    replyTo: `${senderEmail}`,
    text: `sender email: ${senderEmail}\n${message}`,
  });

  return redirect("/");
};
