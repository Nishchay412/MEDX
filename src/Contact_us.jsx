import React from "react";
import { Header } from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export function Contact() {
  // Initialize react-hook-form with Zod schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: name,
      email: email,
      message: message;
    });


    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [message,setMessage] =useState("");
 




  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // handle form submission, such as sending data to an API
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-8 py-10">
        <h1 className="text-green-800 text-5xl">Contact Us</h1>
        <h2 className="text-green-600 text-3xl mt-4">
          Any questions or remarks? Just write us a message!
        </h2>
        <div className="flex flex-col md:flex-row rounded-2xl justify-between gap-8 bg-gray-600 p-8 shadow-lg mt-6">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold text-gray-800">Contact Info</h1>
            <p className="text-lg text-gray-500">
              Say something to start a live chat
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input 
                  {...register("name")} 
                  placeholder="Enter your name" 
                  className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input 
                  {...register("email")} 
                  type="email" 
                  placeholder="Enter your email" 
                  className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea 
                  {...register("message")} 
                  placeholder="Enter your message" 
                  className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button 
                type="submit" 
                className="mt-4 bg-green-600 text-white font-semibold py-2 rounded-lg w-full transform transition duration-200 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
