"use client";
/*** nextjs ***/
import { useRef, useState } from "react";
/*** packages ***/
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
/*** components ***/
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/Buttons/LoadingButton";
import { Textarea } from "@/components/ui/textarea";
import {
  tweenAnimateFromRight10,
  tweenAnimateFromRight13,
  tweenAnimateFromRight16,
  tweenAnimateFromRight19,
} from "@/lib/helpers/variants";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
/*** helpers ***/
const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z
    .string()
    .email({ message: "Invalid email format." })
    .min(1, { message: "Email is Required" }),
  mobile: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "Mobile number must be a 10-digit number.",
  }),
  message: z.string().min(1, { message: "Message is Required" }),
});

async function sendEmail(data: any) {
  try {
    const res = await fetch("/api/v1/send-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(`Error Sending Email`);
  }
}

export default function EnquireForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  async function onSubmit(data: any) {
    setIsSubmitted(true);
    try {
      const responseKey = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
      if (responseKey) {
        data.subject = "contact message";
        data.responseKey = responseKey;
        const response = await sendEmail(data);
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
        setIsSubmitted(false);
        form.reset();
      } else {
        toast.error("Please verify that you are not a robot.");
      }
    } catch (error) {
      setIsSubmitted(false);
      toast.error("Failed to send email");
      console.error("Error sending message:", error);
    }
  }
  return (
    <section className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-gray-700 w-full"
        >
          <div className="w-full grid gap-4">
            <AnimatedDiv
              variants={tweenAnimateFromRight10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="relative">
                      <Input
                        className="focus-visible:ring-transparent hover:border-red-500 focus:border-red-500 rounded-none py-6 font-normal placeholder:font-normal"
                        placeholder="Name*"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </AnimatedDiv>
            <AnimatedDiv
              variants={tweenAnimateFromRight10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="relative">
                      <Input
                        className="focus-visible:ring-transparent hover:border-red-500 focus:border-red-500 rounded-none py-6 font-normal placeholder:font-normal"
                        placeholder="Email Address*"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </AnimatedDiv>
            <AnimatedDiv
              variants={tweenAnimateFromRight10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
            >
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="relative">
                      <Input
                        className="focus-visible:ring-transparent hover:border-red-500 focus:border-red-500 rounded-none py-6 font-normal placeholder:font-normal"
                        placeholder="Contact Number*"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </AnimatedDiv>
            <AnimatedDiv
              variants={tweenAnimateFromRight10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="relative">
                      <Textarea
                        rows={5}
                        className="focus-visible:ring-transparent hover:border-red-500 focus:border-red-500 rounded-none  font-normal placeholder:font-normal"
                        placeholder="Enter Your Message here...*"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </AnimatedDiv>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={String(process.env.NEXT_PUBLIC_RECAPTCHA2_IV_SITE_KEY!)}
              size="invisible"
              // style={{ visibility: "hidden" }}
            />{" "}
            <AnimatedDiv
              variants={tweenAnimateFromRight10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
              className={`flex  items-center mt-2 `}
            >
              <LoadingButton
                type="submit"
                className="bg-[#E92226]  p-6 hover:bg-black"
                isLoading={isSubmitted}
              >
                send message
              </LoadingButton>
            </AnimatedDiv>
          </div>
        </form>
      </Form>
    </section>
  );
}
