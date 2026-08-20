import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatBubbleProps = {
  open: boolean;
  onClose: () => void;
};

export default function ChatBubble({
  open,
  onClose,
}: ChatBubbleProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  if (!open) {
    return null;
  }
  const sendMessage = async () => {
    const text = message.trim();
  
    if (!text || loading) {
      return;
    }
  
    setMessage("");
  
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);
  
    setLoading(true);
  
    try {
      const response = await fetch("http://10.0.51.174:8000/chat_zapr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          message: text,
          baza: "zapr",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
  
      if (!response.body) {
        throw new Error("API nie zwróciło streamu");
      }
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
  
      let buffer = "";
      let assistantMessage = "";
  
      // Tworzymy pustą wiadomość AI
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
            content: "",
        },
      ]);
  
      while (true) {
        const { value, done } = await reader.read();
  
        if (done) {
          break;
        }
  
        buffer += decoder.decode(value, { stream: true });
  
        const events = buffer.split("\n\n");
  
        // Ostatni element może być niepełnym eventem.
        buffer = events.pop() ?? "";
  
        for (const event of events) {
          const lines = event.split("\n");
  
          let eventType = "";
          let data = "";
  
          for (const line of lines) {
            if (line.startsWith("event:")) {
              eventType = line.slice(6).trim();
            } else if (line.startsWith("data:")) {
              data += line.slice(5).trim();
            }
          }
  
          if (!data) {
            continue;
          }
  
          // TOKEN
          if (eventType === "token") {
            try {
              // Backend robi json.dumps(token),
              // więc tutaj otrzymamy zwykły string.
              const token = JSON.parse(data);
  
              assistantMessage += token;
  
              setMessages((prev) => {
                const copy = [...prev];
  
                copy[copy.length - 1] = {
                  role: "assistant",
                  content: assistantMessage,
                };
  
                return copy;
              });
            } catch (error) {
              console.error("Błąd tokenu:", data, error);
            }
          }
  
          // KONTEKST
          else if (eventType === "context") {
            try {
              const context = JSON.parse(data);
  
              console.log("Kontekst RAG:", context);
  
              // tutaj możesz później dodać
              // przycisk "Pokaż kontekst"
            } catch (error) {
              console.error("Błąd kontekstu:", data, error);
            }
          }
        }
      }
    } catch (error) {
      console.error("Błąd komunikacji z API:", error);
  
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Nie udało się połączyć z API.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed top-20 right-6 z-[100] w-[380px] max-w-[calc(100vw-2rem)]">
      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#2563eb] text-white">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>
              <div className="font-semibold">
                Asystent AI
              </div>

              <div className="text-xs text-muted-foreground">
                ZAPR Rachunkowość
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* WIADOMOŚCI */}
        <div className="h-[450px] overflow-y-auto p-4 space-y-3">

          {messages.length === 0 && (
            <div className="text-sm text-muted-foreground">
              Witaj! W czym mogę Ci pomóc?
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <div
                className={
                  msg.role === "user"
                    ? "max-w-[80%] rounded-xl bg-[#2563eb] px-3 py-2 text-sm text-white"
                    : "max-w-[80%] rounded-xl bg-muted px-3 py-2 text-sm"
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-sm text-muted-foreground">
              Piszę...
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="border-t p-3">
          <div className="flex gap-2">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Napisz wiadomość..."
              className="min-w-0 flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2563eb]"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="rounded-md bg-[#2563eb] px-3 py-2 text-white hover:bg-[#1d4ed8] disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}