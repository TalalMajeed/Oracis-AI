"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Bot,
    Info,
    MessageSquare,
    MoreVertical,
    Paperclip,
    Phone,
    Search,
    Send,
    Smile,
    Video
} from "lucide-react";
import { useState } from "react";

const CandidateMessages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  // Mock conversations data
  const conversations = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "HR Manager",
      company: "TechCorp",
      lastMessage: "Looking forward to our interview tomorrow!",
      time: "10:30 AM",
      unread: 2,
      avatar: "/avatars/sarah.jpg",
      online: true
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "Technical Recruiter",
      company: "WebSolutions",
      lastMessage: "Your application has been shortlisted",
      time: "Yesterday",
      unread: 0,
      avatar: "/avatars/michael.jpg",
      online: false
    },
    {
      id: "3",
      name: "AI Assistant",
      role: "Career Coach",
      company: "Oracis AI",
      lastMessage: "I've analyzed your interview performance",
      time: "2 days ago",
      unread: 0,
      avatar: "/avatars/ai-assistant.jpg",
      online: true
    }
  ];

  // Mock messages for selected chat
  const messages = {
    "1": [
      {
        id: 1,
        sender: "Sarah Chen",
        content: "Hi Alex, I'm Sarah from TechCorp HR. Thanks for applying to our Senior Frontend Developer position.",
        time: "10:00 AM",
        isAI: false
      },
      {
        id: 2,
        sender: "You",
        content: "Hi Sarah, thank you for reaching out. I'm excited about the opportunity!",
        time: "10:05 AM",
        isAI: false
      },
      {
        id: 3,
        sender: "Sarah Chen",
        content: "Looking forward to our interview tomorrow!",
        time: "10:30 AM",
        isAI: false
      }
    ],
    "2": [
      {
        id: 1,
        sender: "Michael Rodriguez",
        content: "Hi Alex, I'm Michael from WebSolutions. I wanted to let you know that your application has been shortlisted for the React Developer position.",
        time: "Yesterday",
        isAI: false
      }
    ],
    "3": [
      {
        id: 1,
        sender: "AI Assistant",
        content: "I've analyzed your interview performance and have some suggestions for improvement.",
        time: "2 days ago",
        isAI: true
      }
    ]
  };

  // Mock AI suggestions
  const aiSuggestions = [
    "Thank you for the opportunity! I'm looking forward to discussing how my experience aligns with the role.",
    "Could you please provide more details about the team structure and the tech stack you're using?",
    "I'm available for the interview at the scheduled time. Is there anything specific I should prepare for?",
    "I appreciate the feedback. I'll work on improving those areas for future interviews."
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Conversations List */}
      <div className="w-80 border-r">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input 
              placeholder="Search conversations" 
              className="pl-9"
            />
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-2">
            {conversations.map(conversation => (
              <div
                key={conversation.id}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-50 ${
                  selectedChat === conversation.id ? "bg-gray-50" : ""
                }`}
                onClick={() => setSelectedChat(conversation.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conversation.role} at {conversation.company}</p>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={conversations.find(c => c.id === selectedChat)?.avatar} />
                  <AvatarFallback>
                    {conversations.find(c => c.id === selectedChat)?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-medium">
                    {conversations.find(c => c.id === selectedChat)?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {conversations.find(c => c.id === selectedChat)?.role} at{" "}
                    {conversations.find(c => c.id === selectedChat)?.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical size={20} />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages[selectedChat as keyof typeof messages]?.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "You"
                          ? "bg-[#1d4ed8] text-white"
                          : msg.isAI
                          ? "bg-gray-100"
                          : "bg-gray-50"
                      }`}
                    >
                      {!msg.isAI && msg.sender !== "You" && (
                        <div className="font-medium text-sm mb-1">{msg.sender}</div>
                      )}
                      <p>{msg.content}</p>
                      <div className={`text-xs mt-1 ${
                        msg.sender === "You" ? "text-blue-100" : "text-gray-500"
                      }`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* AI Suggestions */}
            {selectedChat && (
              <div className="p-4 border-t">
                <ScrollArea className="h-20">
                  <div className="flex gap-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="whitespace-nowrap"
                        onClick={() => setMessage(suggestion)}
                      >
                        <Bot size={16} className="mr-2" />
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip size={20} />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile size={20} />
                </Button>
                <Button 
                  size="icon"
                  className="bg-[#1d4ed8] hover:bg-[#1e40af]"
                >
                  <Send size={20} className="text-white" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No conversation selected</h3>
              <p className="mt-2 text-sm text-gray-500">
                Select a conversation to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateMessages; 