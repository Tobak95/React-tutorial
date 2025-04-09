import React from "react";
//conditional rendering
// 1.Multiple returns
// 2. Tenary operator
// 3.Short circut evaluation
const ConditionalREndering = () => {
  const isLoading = false;
  const isSubmitting = true;
  const isErrror = true;

  if (isLoading) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      <h1>MAIN CONTENT</h1>
      <button className="mybtn">
        {isSubmitting ? "submiting...." : "submit"}
      </button>
      {isErrror && <h1>Error Loading Page... Try Again</h1>}
    </div>
  );
};

export default ConditionalREndering;
