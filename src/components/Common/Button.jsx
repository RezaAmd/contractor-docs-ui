const Button = ({
  type,
  children,
  isPending = false,
  disabled = false,
  className = "",
  onClick = null
}) => {
  return (
    <button
      className={"px-3 py-2 rounded-lg " + className}
      disabled={disabled || isPending}
      type={type}
      onClick={onClick}
    >
      {isPending ? "درحال بارگیری..." : children}
    </button>
  );
};

export default Button;
