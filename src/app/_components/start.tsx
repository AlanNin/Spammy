import CustomInput from "./input";

// types
type Props = {
  value?: string;
  onChange?: (e: any) => void;
  onSubmit?: () => void;
  isProcessing?: boolean;
};

function Start({ value, onChange, onSubmit, isProcessing }: Props) {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl font-semibold">Spammy</h1>
        <p>Your AI-Powered tool for detecting spam emails.</p>
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
