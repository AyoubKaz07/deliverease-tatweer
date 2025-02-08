import { Button } from "@mui/material";

export function UpgradePlanButton() {
  return (
    <Button
      className="rounded-xl text-base capitalize px-3 py-2 font-medium bg-[#2080e2] text-white w-36"
      variant="outlined"
    >
      Upgrade Plan
    </Button>
  );
}
export function ChangeSettingsButton() {
  return (
    <Button
      className="rounded-xl border-[#fff] text-base capitalize px-3 py-2 font-medium bg-[#f5f6fa] text-[#15223C] min-w-36"
      variant="outlined"
    >
      Change Settings
    </Button>
  );
}
