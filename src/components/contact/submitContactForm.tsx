import { z } from "zod"

const ContactFormSchema = z.object({
    name: z.string().min(1, "A name is required"),
    phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number"),
    email: z.string().email("Invalid email address"),
    description: z.string().email("Description for work missing."),

})
type ContactFormState = {
    errors: Partial<Record<keyof z.infer<typeof ContactFormSchema>, string>>;
    success: boolean;
  };
export const submitContactForm = (prevState: ContactFormState, formData: FormData) => {
    const rawContactData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        description: formData.get('description'),
      };
    
      const result = ContactFormSchema.safeParse(rawContactData);
      if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
        errors: {
            name: errors.name?.[0],
            phone: errors.phone?.[0],
            email: errors.email?.[0],
            description: errors.description?.[0],
        },
        success: false,
        };
    }
    return {
        errors: {},
        success: true,
    };
}