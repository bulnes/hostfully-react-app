interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export function Button({ children, buttonType, ...attributes }: ButtonProps) {
  let buttonClasses;

  switch (buttonType) {
    case "secondary":
      buttonClasses = "bg-white text-blue-700 border border-blue-500";
      break;
    case "danger":
      buttonClasses = "bg-white text-red-700 border border-red-500";
      break;
    case "primary":
    default:
      buttonClasses =
        "bg-blue-500 hover:bg-blue-700 text-white border border-blue-500";
  }

  return (
    <button
      className={`${buttonClasses} font-bold py-2 px-4 rounded`}
      {...attributes}
    >
      {children}
    </button>
  );
}
