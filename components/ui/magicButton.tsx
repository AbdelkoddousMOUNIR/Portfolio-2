import React from "react";
import { ClipLoader } from "react-spinners";
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  className,
  otherClasses,
  loading,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  className?: string;
  otherClasses?: string;
  loading?: boolean;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none ${className}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A1E3F9_0%,#578FCA_50%,#3674B5_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-black px-7 text-sm font-medium text-white ${
               loading ? "text-opacity-55" : "text-opacity-100"
             } backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" &&
          (loading ? (
            <ClipLoader size={18} color="#fff" className="ml-1" />
          ) : (
            icon
          ))}
        {title}
        {position === "right" &&
          (loading ? (
            <ClipLoader size={18} color="#fff" className="ml-1" />
          ) : (
            icon
          ))}
      </span>
    </button>
  );
};

export default MagicButton;
