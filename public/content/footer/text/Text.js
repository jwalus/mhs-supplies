import BusinessInfo from "../../reuseable/BusinessInfo";
import Phone from "@/public/content/home/svgs/Phone";
import Pin from "@/public/content/contact/svgs/Pin";
import Email from "@/public/content/contact/svgs/Email";

const Text = {
    Header: "Patient-Centered. Practice-Supported.",
    Text1P1: `${BusinessInfo.address.street}, ${BusinessInfo.address.suite}`,
    Text1P2: `${BusinessInfo.address.city}, ${BusinessInfo.address.state}, ${BusinessInfo.address.zip}`,
    Svg1: Pin,
    Text2: `${BusinessInfo.contact.phone}`,
    Svg2: Phone,
    Text3: `${BusinessInfo.contact.email}`,
    Svg3: Email,
};

export default Text;  