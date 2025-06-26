type LabelProps = {
  text: string;
  className?: string;
};

export default function Label({ text, className }: LabelProps) {
  return (
    <p className={`bg-[#0386F4] py-2.5 px-4 w-fit rounded-[3px] text-white ${className}`}>{text}</p>
  );
}
