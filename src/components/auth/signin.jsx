"use client";
const Signin = () => {
  return (
    <div>
      <div className="mb-3">
        <label>نام کاربری / شماره همراه</label>
        <input type="text" />
      </div>
      <div className="mb-3">
        <label>رمز عبور</label>
        <input type="password" />
      </div>
      <div className="grid">
        <button className="px-3 py-2 bg-blue-700">ورود</button>
      </div>
    </div>
  );
};

export default Signin;
