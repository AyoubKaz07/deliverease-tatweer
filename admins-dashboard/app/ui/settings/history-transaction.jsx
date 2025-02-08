function HistoryTransactionSection() {
  return (
    <div className="max-w-[450px] mx-auto">
      <h4 className="text-[#2080e2] md:text-2xl font-semibold">My Card</h4>
      <div className="my-4">
        <img src="card.svg" />
      </div>

      <div className="flex justify-between gap-3">
        <div>
          <h5 className="text-base text-[#AFAFAF] font-medium">Currency</h5>
          <p className="text-[#15223c] text-lg  font-semibold">
            USD/ US Dollar
          </p>
        </div>
        <div>
          <h5 className="text-base text-[#AFAFAF] font-medium">Status</h5>
          <p className="text-[#22c55e] text-lg  font-semibold">Active</p>
        </div>
      </div>

      <div className="mt-10">
        <h4 className="text-[#2080e2] md:text-2xl font-semibold">
          History Transactions
        </h4>
        <div className=""></div>
      </div>
    </div>
  );
}

export default HistoryTransactionSection;
