const TabelHead = () => {
  return (
    <thead className="text-sm border-b dark:border-[#2c2c2c]">
      <tr>
        <th className="py-4 px-4 text-center">No</th>
        <th className="py-4 px-4 text-left">Name</th>
        <th className="py-4 px-4 text-left">Request Method</th>
        <th className="py-4 px-4 text-left">Description</th>
        <th className="py-4 px-4 text-left">Query Parameter</th>
        <th className="py-4 px-4 text-left">Status</th>
        <th className="py-4 px-4 text-left">Action</th>
      </tr>
    </thead>
  );
};

export default TabelHead;
