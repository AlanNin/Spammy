import { Loader, SendHorizontal } from "lucide-react";

// types
type Props = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  onSubmit?: () => void;
  isProcessing?: boolean;
  color?: string;
};

function CustomInput({
  placeholder,
  type,
  value,
  onChange,
  onSubmit,
  isProcessing,
  color,
}: Props) {
  return (
    <div className="relative h-max w-full">
      <input
        className={`w-full rounded-full ${
          color ? `bg-[${color}]` : "bg-[#4d4d4d]"
        } p-3 px-5 pr-14 transition-all duration-200 placeholder:text-white/50 focus:border-none focus:outline-none ${
          isProcessing ? "text-white/75 opacity-75" : "text-white opacity-100"
        }`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            onSubmit();
          }
        }}
        autoComplete="off"
        disabled={isProcessing}
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        {isProcessing ? (
          <Loader
            className={`h-9 w-9 animate-spin cursor-wait p-2 text-white/75`}
          />
        ) : (
          <SendHorizontal
            className={`h-9 w-9 cursor-pointer p-2 text-white/75 transition-all duration-300 ${
              isProcessing
                ? "opacity-50"
                : "opacity-100 hover:-rotate-45 hover:text-[#f785d1]"
            }`}
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default CustomInput;
