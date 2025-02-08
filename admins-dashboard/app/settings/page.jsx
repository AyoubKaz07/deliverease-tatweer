import OwnerInfo from "../ui/settings/owner-info";
import HistoryTransactionSection from "../ui/settings/history-transaction";
import { poppins } from "../ui/fonts";
import "./page.css";
export default async function Settings() {
  return (
    <div className={`grid w-full gap-x-10 grid-cols-[1fr]  md:grid-cols-[2fr_1fr] ${poppins.className} `}>
      <div className="admin-data">
        <OwnerInfo />
      </div>
      <div className="card bg-white   p-7 rounded-2xl border-solid border-[2px] border-[#f4f2f2]">
        <HistoryTransactionSection />
      </div>
      <div className="history-transactions">dbb</div>
    </div>
  );
}
