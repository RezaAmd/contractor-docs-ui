import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Main pages
      <div className="grid">
        <Link
          className="bg-blue-500 px-3 py-2 rounded-md text-white"
          href="/admin"
        >
          مدیریت
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
