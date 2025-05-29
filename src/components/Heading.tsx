export const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`cursor-default font-mono text-base font-semibold sm:text-2xl ${className}`}
    >
      {children}
    </h1>
  );
};
