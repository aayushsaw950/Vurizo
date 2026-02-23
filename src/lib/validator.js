import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  budget: z.string().min(1, "Select your budget"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});