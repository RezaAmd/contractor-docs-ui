import styles from "./Input.module.css";

const Input = ({
  name,
  id = "",
  type = "text",
  className = "",
  placeholder = "",
  dir = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      className={styles["form-control"] + ` ${className}`}
      type={type}
      placeholder={placeholder}
      dir={dir}
    />
  );
};

export default Input;
