import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-yellow-600">
      <div className="flex items-center gap-3">
        <span className="animate-spin">⌛️</span>
        <span className="font-mono">Boosting your entertainment in different ways!</span>
      </div>
    </div>
  );
};

export default Spinner;
