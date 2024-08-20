import Link from "next/link";

const ButtonLink = ({ href = "#", children = null, className = "" }) => {
  return (
    <Link className={"px-3 py-2 rounded-lg text-center " + className} href={href}>
      {children && children}
    </Link>
  );
};

export default ButtonLink;
