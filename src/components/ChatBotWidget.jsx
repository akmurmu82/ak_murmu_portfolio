// ChatBotWidget.jsx
import {
  Box,
  IconButton,
  Input,
  Button,
  useDisclosure,
  useTheme,
  Spinner,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const MotionBox = motion(Box);

const ChatBotWidget = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { role: "assistant", content: "Hey! Ask me anything about my portfolio." },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const theme = useTheme();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newHistory = [...history, { role: "user", content: input }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://chatbot-for-portfolio.onrender.com/ask", {
        question: input,
        history: newHistory,
      });

      setHistory([
        ...newHistory,
        { role: "assistant", content: res.data.answer || "No response." },
      ]);
    } catch (error) {
      setHistory([
        ...newHistory,
        { role: "assistant", content: "Error getting response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <>
      {/* Floating Icon */}
      {/* // Wrap the IconButton inside a MotionBox to make it draggable */}
<MotionBox
  drag
  dragConstraints={{ top: window.innerHeight, bottom: window.innerHeight, left: 0, right: window.innerWidth }}
  dragElastic={0.2}
  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
  position="absolute"
  bottom="5"
  right="5"
  zIndex="9999"
  cursor="grab"
>
  <IconButton
    icon={<Box padding={5}><ChatIcon /></Box>}
    isRound
    size="lg"
    bg={theme.colors.jhataak || "blue.500"}
    color="white"
    boxShadow="lg"
    _hover={{ bg: theme.colors.secondary || "blue.600" }}
    onClick={onToggle}
    aria-label="Open chat"
  />
</MotionBox>


      {/* Chat Window */}
      {isOpen && (
        <MotionBox
          position="fixed"
          bottom="20"
          right="5"
          color="#000"
          width="320px"
          height="450px"
          bg="white"
          borderRadius="md"
          boxShadow="xl"
          display="flex"
          flexDirection="column"
          overflow="hidden"
          zIndex="1000"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Box p={3} bg="gray.100" fontWeight="bold">
            Portfolio Chatbot
          </Box>

          <Box flex="1" overflowY="auto" p={3}>
            {history.map((msg, idx) => (
              <Box
                key={idx}
                bg={msg.role === "user" ? "blue.100" : "gray.100"}
                borderRadius="md"
                p={2}
                mb={2}
                maxW="80%"
                alignSelf={msg.role === "user" ? "flex-end" : "flex-start"}
              >
                {msg.content}
              </Box>
            ))}
            {loading && (
              <Box fontSize="sm" color="gray.500">
                <Spinner size="sm" mr={2} />
                Typing...
              </Box>
            )}
            <div ref={chatEndRef} />
          </Box>

          <Box p={3} borderTop="1px solid" display="flex" gap={2}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              size="sm"
              flex="1"
            />
            <Button size="sm" colorScheme="blue" onClick={sendMessage}>
              Send
            </Button>
          </Box>
        </MotionBox>
      )}
    </>
  );
};

export default ChatBotWidget;
