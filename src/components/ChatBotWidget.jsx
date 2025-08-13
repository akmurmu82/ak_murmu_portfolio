// ChatBotWidget.jsx
import {
  Box,
  IconButton,
  Input,
  Button,
  useDisclosure,
  useTheme,
  Spinner,
  Text,
  VStack,
  HStack,
  Avatar
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
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
  const chatWidgetRef = useRef(null);
  const theme = useTheme();

  // Handle click outside to close
  const handleClickOutside = useCallback((event) => {
    if (chatWidgetRef.current && !chatWidgetRef.current.contains(event.target)) {
      if (isOpen) {
        onToggle();
      }
    }
  }, [isOpen, onToggle]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newHistory = [...history, { role: "user", content: input }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_CHATBOT_API || import.meta.env.CHATBOT_API;
      
      if (!apiUrl) {
        throw new Error("Chatbot API URL not configured");
      }
      
      const res = await axios.post(`${apiUrl}/ask`, {
        question: input,
        history: newHistory,
      });

      setHistory([
        ...newHistory,
        { role: "assistant", content: res.data.answer || "No response." },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setHistory([
        ...newHistory,
        { 
          role: "assistant", 
          content: "Sorry, I'm currently unavailable. Please use the contact form to reach out directly!" 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <Box ref={chatWidgetRef}>
      {/* Floating Icon */}

      <IconButton
        icon={
          <Box padding={1} position="relative">
            <ChatIcon />
            {!isOpen && (
              <Box
                position="absolute"
                top="-2px"
                right="-2px"
                w="8px"
                h="8px"
                bg="green.400"
                borderRadius="full"
                animation="pulse 2s infinite"
              />
            )}
          </Box>
        }
        isRound
        size="lg"
        bg={theme.colors.jhataak || "blue.500"}
        color="white"
        boxShadow="lg"
        _hover={{ 
          bg: theme.colors.secondary || "blue.600",
          transform: "scale(1.1)"
        }}
        onClick={onToggle}
        aria-label="Open chat"
        transition="all 0.2s"
      />

      {/* Chat Window */}
      {isOpen && (
        <MotionBox
          position="fixed"
          bottom="24"
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
          border="1px solid"
          borderColor="gray.200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Box p={3} bg={theme.colors.jhataak} color="white" fontWeight="bold">
            <HStack>
              <Avatar size="sm" name="Portfolio Bot" bg="white" color={theme.colors.jhataak} />
              <VStack align="start" spacing={0}>
                <Text fontSize="sm">Portfolio Assistant</Text>
                <Text fontSize="xs" opacity={0.8}>Online</Text>
              </VStack>
            </HStack>
          </Box>

          <Box flex="1" overflowY="auto" p={3}>
            {history.map((msg, idx) => (
              <VStack
                key={idx}
                align={msg.role === "user" ? "flex-end" : "flex-start"}
                mb={2}
                w="100%"
              >
                <Box
                  bg={msg.role === "user" ? theme.colors.jhataak : "gray.100"}
                  color={msg.role === "user" ? "white" : "black"}
                  borderRadius="lg"
                  p={3}
                  maxW="85%"
                  fontSize="sm"
                  boxShadow="sm"
                >
                  {msg.content}
                </Box>
              </VStack>
            ))}
            {loading && (
              <HStack fontSize="sm" color="gray.500">
                <Spinner size="sm" mr={2} />
                <Text>Typing...</Text>
              </HStack>
            )}
            <div ref={chatEndRef} />
          </Box>

          <Box p={3} borderTop="1px solid" borderColor="gray.200" display="flex" gap={2}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              size="sm"
              flex="1"
              borderRadius="full"
            />
            <Button 
              size="sm" 
              bg={theme.colors.jhataak}
              color="white"
              onClick={sendMessage}
              isDisabled={!input.trim() || loading}
              borderRadius="full"
              _hover={{
                bg: theme.colors.secondary
              }}
            >
              Send
            </Button>
          </Box>
        </MotionBox>
      )}
    </Box>
  );
};

export default ChatBotWidget;
