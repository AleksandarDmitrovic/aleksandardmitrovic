import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aleksandar",
          from_email: form.email,
          to_email: "aleksandar.dmitrovic@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // TODO: Show success message
        // TODO: Hide an alert
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1>Get In Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Odin"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="odin@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
