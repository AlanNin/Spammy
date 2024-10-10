"use client";
import CustomInput from "./input";
import { ResultsProps } from "../page";
import SpammyIcon from "~/../public/icons/Spammy-Icon.png";
import { useState } from "react";

type Props = {
  results: ResultsProps[];
  value?: string;
  onChange?: (e: any) => void;
  onSubmit?: () => void;
  isProcessing?: boolean;
  reStart?: () => void;
};

export default function Conversation({
  results,
  value,
  onChange,
  onSubmit,
  isProcessing,
  reStart,
}: Props) {
  // define show details
  const [showDetails, setShowDetails] = useState(false);

  // define current details
  const [currentDetails, setCurrentDetails] = useState<ResultsProps | null>(
    null,
  );

  // toggle show details
  const toggleShowDetails = (result: ResultsProps) => {
    setShowDetails(!showDetails);
    setCurrentDetails(result);
  };
  return (
    <div className="mx-auto flex h-screen max-w-[980px] flex-col items-center justify-center">
      <div className="mt-8 flex flex-col gap-1">
        <h1
          className="cursor-pointer text-3xl font-semibold tracking-wide text-white/90"
          onClick={reStart}
        >
          Spammy
        </h1>
        <p className="text-white/60">
          Your AI-Powered tool for detecting spam emails.
        </p>
      </div>

      <div className="no-scrollbar my-8 w-full flex-1 overflow-y-auto px-12">
        {results.map((result, index) => (
          <div key={index}>
            <div className="mb-6 flex justify-end">
              <div className="max-w-[80%] rounded-l-lg rounded-t-lg bg-[#343541] p-4 text-start">
                <p className="text-sm text-white">{result.email}</p>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-start gap-3">
              <img
                src={SpammyIcon.src}
                alt="Spammy Icon"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-sm text-white">
                {result.result === "Spam"
                  ? "This email is spam."
                  : "This email is not spam."}{" "}
                <span
                  className="cursor-pointer underline transition-colors duration-200 hover:text-[#e292c7]"
                  onClick={() => toggleShowDetails(result)}
                >
                  Click here to see details.
                </span>
              </p>
            </div>
          </div>
        ))}

        {isProcessing && (
          <div>
            <div className="mb-6 flex justify-end">
              <div className="max-w-[80%] rounded-l-lg rounded-t-lg bg-[#343541] p-4">
                <p className="text-sm text-white">{value}</p>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-start gap-3">
              <img
                src={SpammyIcon.src}
                alt="Spammy Icon"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-sm text-white">Analyzing</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full border-t border-gray-700/30 p-5">
        <CustomInput
          placeholder="Type your email here..."
          type="text"
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          isProcessing={isProcessing}
          color="#343541"
        />
      </div>
      {showDetails && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex max-w-[80%] flex-col gap-2 rounded-lg bg-[#2c2c30] p-5">
            <p className="upp mb-2 text-xl font-medium text-white">
              {currentDetails?.result === "Spam"
                ? "This email is spam."
                : "This email is not spam."}
            </p>
            <p className="text-sm text-white/70">
              {Number(currentDetails?.spam_probability.toFixed(2)) * 100}%
              probabilies of being spam.
            </p>
            <p className="text-sm text-white/70">
              {(Number(currentDetails?.ham_probability) * 100).toFixed(2)}%
              probabilies of being not spam.
            </p>
            <button
              className="mt-4 rounded-md bg-[#494949] p-2 text-white/90 transition-all duration-300 hover:bg-[#5c5c5c]"
              onClick={() => setShowDetails(false)}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
