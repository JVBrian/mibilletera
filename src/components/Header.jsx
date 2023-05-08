import { BiWallet } from "react-icons/bi";

export function Header() {
  return (
    <div className="text-3xl font-bold text-center my-5 flex justify-center gap-1 items-center">
      <BiWallet />
      Mi billetera
    </div>
  );
}
