import { useState } from "react";
import BusinessInfo from "@/public/content/reuseable/BusinessInfo";
import Button from "./Button";

export default function ContactCard() {
    const [phone, setPhone] = useState("");
    const [formStatus, setFormStatus] = useState("");

    const handlePhoneChange = (e) => {
        const input = e.target.value.replace(/\D/g, "").substring(0, 10);
        const areaCode = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        let formatted = input;
        if (input.length > 6) {
            formatted = `(${areaCode}) ${middle}-${last}`;
        } else if (input.length > 3) {
            formatted = `(${areaCode}) ${middle}`;
        } else if (input.length > 0) {
            formatted = `(${areaCode}`;
        }

        setPhone(formatted);
    };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const data = Object.fromEntries(formData.entries());
    //     data.privacy_policy = formData.get("privacy_policy") === "on";

    //     try {
    //       const res = await fetch("/api/mailer", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data),
    //       });

    //       const result = await res.json();

    //       if (res.ok) {
    //         setFormStatus("Form submitted successfully!");
    //       } else {
    //         setFormStatus(result.error || "Something went wrong.");
    //       }
    //     } catch (err) {
    //       setFormStatus("Submission failed. Please try again.");
    //     }
    //   };

    return (
        <div>
            <div className="bg-gray-200 p-[1rem] shadow-lg">
                <div className="text-2xl font-semibold text-orangeOne">
                    Contact Us Today
                </div>
                <div className="text-lg my-[0.75rem]">
                    Fill in the form below and we’ll get back to you as soon as possible.
                </div>
                <form className="flex flex-col w-full">
                    <div className="flex flex-col w-full">
                        <label className="my-[0.75rem] text-[16px] font-semibold" htmlFor="name">Name <span className="ml-1 text-red-500 font-bold text-[16.5px]">*</span></label>
                        <input type="text" className="py-3 px-3 text-[18px] w-full" id="name" name="name" required />
                    </div>

                    <div className="flex flex-col mid:flex-row gap-3 w-full">
                        <div className="flex flex-col w-full">
                            <label className="my-[0.75rem] text-[16px] font-semibold" htmlFor="email">Email <span className="ml-1 text-red-500 font-bold text-[16.5px]">*</span></label>
                            <input type="email" className="py-3 px-3 text-[18px] w-full" id="email" name="email" required />
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="my-[0.75rem] text-[16px] font-semibold" htmlFor="phone">Phone <span className="ml-1 text-red-500 font-bold text-[16.5px]">*</span></label>
                            <input
                                type="tel"
                                className="py-3 px-3 text-[18px] w-full"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="my-[0.75rem] text-[16px] font-semibold" htmlFor="message">Message<span className="ml-1 text-red-500 font-bold text-[16.5px]">*</span></label>
                        <textarea id="message" name="message" className="py-3 px-3 text-[18px] w-full resize-none" required></textarea>
                    </div>

                    <div className="mt-[1.35rem]">
                        <Button text={"Submit"} />
                    </div>

                    {formStatus && (
                        <div className="flex justify-center text-[16.5px] tablet:text-[18px] mt-[1.5rem] mb-[2rem] text-center text-green-700">
                            {formStatus}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}