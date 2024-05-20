"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8u989je",
        "template_9actt61",
        e.currentTarget,
        "5QOFHFd1qI0_MA9vL"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setForm({
            name: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center flex-col gap-5 relative"
    >
      {confirmationMessage && (
        <p className="text-[#231f20] font-figtree text-center">
          {confirmationMessage}
        </p>
      )}
      {/* <p className="text-[#231f20] font-figtree tracking-[0.1rem] text-center">
        Vous avez des questions ou des commentaires ? N'hésitez pas à nous
        envoyer un message !
      </p> */}
      <div className="">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="NOM & PRENOM"
          className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] font-figtree bg-[#231f20] bg-opacity-10 text-noir-1 text-center rounded-1rem focus:outline-none focus:border-noir-1 transition-all duration-300 ease-in-out"
          onChange={handleChange}
          value={form.name}
          minLength={2}
          maxLength={30}
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="objet"
          name="objet"
          placeholder="OBJET"
          className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
          onChange={handleChange}
          value={form.objet}
          minLength={2}
          maxLength={20}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="EMAIL"
          className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
          onChange={handleChange}
          value={form.email}
          required
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="MESSAGE"
          className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-[#231f20] bg-opacity-10 text-[#231f20] text-center rounded-1rem focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
          onChange={handleChange}
          value={form.message}
          required
          minLength={2}
          maxLength={350}
        />
      </div>
      <button
        type="submit"
        className="p-[0.5rem] text-white font-figtree tracking-[0.3rem] bg-noir-1 focus:outline-none focus:ring-2 focus:ring-grey-4 transition-all duration-300 ease-in-out hover:bg-grey-3 hover:shadow-xl"
      >
        ENVOYER
      </button>
    </form>
  );
}
