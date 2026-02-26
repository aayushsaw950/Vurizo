"use client";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { contactSchema } from "@/lib/validator";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm({
        resolver: zodResolver(contactSchema),
      });

      const onSubmit = async (data) => {
        try {
          const res = await axios.post("/api/contact", data);
          alert(res.data.message || "Message sent successfully!");
          reset();
        } catch (err) {
          alert(err?.response?.data?.error || "Something went wrong");
        }
      };
  return (
    <>
    <Navbar />
    <section className="grid-bg">
    <main className="px-6 lg:px-20 py-24 max-w-4xl mx-auto ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
       <h1 className="text-4xl lg:text-5xl font-bold">
          Let’s Turn Your Manual Workflows into Automated Systems
        </h1>
        <p className="text-slate-400 mt-4">
          Share your current process, and we’ll design a custom automation solution that saves time, reduces errors, and scales your operations.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 bg-card-dark p-10 rounded-2xl border border-border-dark"
      >
        {/* Name + Business */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none w-full"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Business Name"
              {...register("business")}
              className="bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none w-full"
            />
            {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business.message}</p>}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none w-full"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none w-full"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Business Type */}
        <div>
          <select
            {...register("type")}
            className="w-full bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none"
          >
            <option value="">Select Business Type</option>
            <option>Gym / Fitness Center</option>
            <option>Coaching Institute</option>
            <option>Agency</option>
            <option>E-commerce</option>
            <option>Other</option>
          </select>
          {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
        </div>

        {/* Budget */}
        <div>
          <select
            {...register("budget")}
            className="w-full bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none"
          >
            <option value="">Select Budget Range</option>
            <option>₹30,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000 - ₹2,50,000</option>
            <option>₹2,50,000+</option>
          </select>
          {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={5}
            placeholder="Tell us what you want to automate..."
            {...register("message")}
            className="w-full bg-background-dark border border-border-dark p-4 rounded focus:border-primary outline-none"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-black font-bold py-4 rounded transition-transform hover:scale-105 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Request Consultation"}
        </button>
      </motion.form>

      {/* Optional Direct Contact */}
      <div className="text-center mt-10 text-slate-400">
        Prefer direct contact? Email us at{" "}
        <span className="text-primary">aayush@vurizo.in</span>
      </div>
    </main>
    </section>
    <Footer/>
    </>
  );
}