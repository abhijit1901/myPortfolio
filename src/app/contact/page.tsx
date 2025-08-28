import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="gap-2 py-2 px-4 text-sm font-medium self-start">
            <Phone className="h-4 w-4" />
            Contact Us
          </Badge>
          
          <div className="space-y-4">
            <Heading>Contact Me!</Heading>
            <p className="font-poppins text-lg md:text-xl text-primary/80 max-w-2xl leading-relaxed">
              Have a question? Fill out the form below!
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center pt-4">
          <FramerWrapper y={0} scale={0.8}>
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default contactPage;