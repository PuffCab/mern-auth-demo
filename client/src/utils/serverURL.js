const serverURL =
  process.env.NODE_ENV === "production"
    ? "https://mern-auth-demo-backend.vercel.app/"
    : "http://localhost:5001";

export { serverURL };
