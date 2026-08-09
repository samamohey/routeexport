import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  country: z.string().trim().max(100).optional().default(""),
  product: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_enquiries").insert({
      name: data.name,
      email: data.email,
      country: data.country || null,
      product: data.product || null,
      message: data.message || null,
    });
    if (error) {
      console.error("Failed to store enquiry", error);
      throw new Error("Failed to store enquiry");
    }
    return { ok: true as const };
  });
