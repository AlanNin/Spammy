import CustomInput from "./input";
import WritingText from "./writing_text";

// types
type Props = {
  value?: string;
  onChange?: (e: any) => void;
  onSubmit?: () => void;
  isProcessing?: boolean;
};

function Start({ value, onChange, onSubmit, isProcessing }: Props) {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold tracking-wide">Spammy</h1>
        <WritingText
          text="Your AI-Powered tool for detecting spam emails."
          duration={25}
          style="text-xl font-medium text-white/70 max-md:text-base"
        />
      </div>
      <div className="w-full max-w-[600px]">
        <CustomInput
          placeholder="Type your email here..."
          type="text"
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}

export default Start;
