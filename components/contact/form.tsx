"use client";

import { useState } from "react";
import MagicButton from "../ui/magicButton";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[600px] flex flex-col gap-10"
    >
      <div className="flex gap-5 items-center flex-col md:flex-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full md:w-1/2 py-3 px-4 border-2 border-[#3674B5] outline-none text-white rounded-md bg-black bg-opacity-70"
          required
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full md:w-1/2 py-3 px-4 border-2 border-[#3674B5] outline-none text-white rounded-md bg-black bg-opacity-70"
          required
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full py-3 px-4 border-2 border-[#3674B5] outline-none text-white rounded-md bg-black bg-opacity-70"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full py-3 px-4 border-2 border-[#3674B5] outline-none text-white rounded-md bg-black bg-opacity-70"
        required
        onChange={handleChange}
        value={formData.subject}
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full h-[200px] text-start py-3 px-4 border-2 border-[#3674B5] outline-none text-white rounded-md bg-black bg-opacity-70"
        required
        onChange={handleChange}
        value={formData.message}
      />
      <MagicButton title={`${loading ? "Submiting" : "Submit"}`} loading={loading} position="right" />
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
