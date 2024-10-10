"use client";
import { useState } from "react";
import { ClassifyEmail } from "~/server/queries/spam_classifier";
import Start from "../components/custom/start";
import Conversation from "../components/custom/conversation";
import { toast } from "sonner";

// results type
export type ResultsProps = {
  email: string;
  result: string;
  spam_probability: number;
  ham_probability: number;
};

export default function HomePage() {
  // define results state
  const [results, setResults] = useState<ResultsProps[]>([]);

  // define email state
  const [email, setEmail] = useState("");

  // define change email
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  // define is processing
  const [isProcessing, setIsProcessing] = useState(false);

  // define re-start
  const reStart = () => {
    setEmail("");
    setResults([]);
    setIsProcessing(false);
  };

  // define classify email
  const classifyEmail = async () => {
    if (!email) {
      toast("⚠ Please enter an email.");
      return;
    }
    setIsProcessing(true);
    const result = await ClassifyEmail(email);
    if (result) {
      setResults((prevResults) => [
        ...prevResults,
        {
          email: email,
          result: result.resultado,
          spam_probability: result.probabilidad_spam,
          ham_probability: result.probabilidad_no_spam,
        },
      ]);
      setEmail("");
      setIsProcessing(false);
    } else {
      setIsProcessing(false);
      toast("⚠ Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#292929] to-[#222222] text-center text-white ">
      <div className="h-full w-full items-center justify-center">
        {results && results.length > 0 ? (
          <Conversation
            results={results}
            value={email}
            onChange={handleChange}
            onSubmit={classifyEmail}
            isProcessing={isProcessing}
            reStart={reStart}
          />
        ) : (
          <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
            <Start
              value={email}
              onChange={handleChange}
              onSubmit={classifyEmail}
              isProcessing={isProcessing}
            />
            <p className="mb-4 mt-auto self-center text-sm text-white/50">
              Please remember, Spammy can make mistakes.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
