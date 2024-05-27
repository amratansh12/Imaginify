import React from "react";

const TranformationsPage = ({ params: { id } }: { params: { id: number } }) => {
  return (
    <div>
      TranformationsPage for
      <span className="font-bold bg-green-400 px-2 ml-1 rounded-md shadow-sm text-white">
        {id}
      </span>
    </div>
  );
};

export default TranformationsPage;
