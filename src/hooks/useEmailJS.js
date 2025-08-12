import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@chakra-ui/react';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const sendEmail = async (formData, formRef) => {
    setIsLoading(true);
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_86yi4br",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_s7kkrds",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Yr50FP_5lajaEFbZp"
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return { success: true, result };
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
};