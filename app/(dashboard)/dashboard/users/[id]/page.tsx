import React from "react";

const page = async({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>User Detail:{id}</h1>
    </div>
  );
};

export default page;
