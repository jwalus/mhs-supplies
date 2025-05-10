import Phone from "@/public/content/home/svgs/Phone";
import Clock from "@/public/content/contact/svgs/Clock";
import Pin from "@/public/content/contact/svgs/Pin";
import Email from "@/public/content/contact/svgs/Email";
import BusinessInfo from "../../reuseable/BusinessInfo";

const Text = {
    Header1: "Address",
    Text1: `${BusinessInfo.address.street}, ${BusinessInfo.address.suite} ${BusinessInfo.address.city}, ${BusinessInfo.address.state}, ${BusinessInfo.address.zip} `,
    Svg1: Pin,
    Header2: "Phone",
    Text2: `${BusinessInfo.contact.phone}`,
    Svg2: Phone,
    Header3: "Email",
    Text3: `${BusinessInfo.contact.email}`,
    Svg3: Email,
    Header4: "Hours",
    Text4Part1: "Mon-Fri: 9 am to 5 pm",
    Text4Part2: "Sat & Sun: Closed",
    Svg4: Clock,

    SideHeader: "GET IN TOUCH",
    SideText1: "We’re here to support you.",
    SideText2: "At MHS Wound Care, we proudly serve dozens of medical providers with reliable access to essential wound care and medical supplies. Whether you have a question or need product support, our team is ready to help you get what you need — quickly and confidently."
};

export default Text;