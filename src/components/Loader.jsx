const Loader = () => {
  return (
    <div
      className="h-12 w-12"
      style={{
        aspectRatio: "1",
        "--c": "no-repeat linear-gradient(#DC2626 0 0)",
        background: `
          var(--c) 0% 50%,
          var(--c) 50% 50%,
          var(--c) 100% 50%
        `,
        backgroundSize: "20% 100%",
        animation: "l1 1s infinite linear",
      }}
    >
      <style>{`
        @keyframes l1 {
          0% { background-size: 20% 100%, 20% 100%, 20% 100%; }
          33% { background-size: 20% 10%, 20% 100%, 20% 100%; }
          50% { background-size: 20% 100%, 20% 10%, 20% 100%; }
          66% { background-size: 20% 100%, 20% 100%, 20% 10%; }
          100% { background-size: 20% 100%, 20% 100%, 20% 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
