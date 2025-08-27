import "./styles.css";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  return (
    <div className="hero">
      <div className="hero-image">
        <div className="hero-text">
          {pathname === "/" ? (
            <h1>Spend $150 To Become Member Get 2000% Membership points</h1>
          ) : (
            <h1>
              150달러를 지출하고 회원이 되면 2000%의 멤버십 포인트를 받을 수
              있습니다.
            </h1>
          )}
          <p className="text-sm">
            {pathname === "/"
              ? "The membership will be valid from first purchase the point will be credited to your account after shipment"
              : "멤버십은 첫 구매부터 유효하며, 포인트는 배송 후 귀하의 계정에 적립됩니다."}
          </p>
          <button>{pathname === "/" ? "Start Shopping" : "쇼핑 시작"} </button>
        </div>
      </div>
    </div>
  );
}
