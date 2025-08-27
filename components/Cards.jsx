import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function Cards({ cart, setCart, data }) {
  const pathname = usePathname();
  const handleSelect = (data, index) => {
    setCart([...cart, data]);
    let cartButton = document.getElementById(index);
    if (pathname === "/") {
      document.getElementById(index).innerHTML = "Added to cart";
    } else {
      document.getElementById(index).innerHTML = "장바구니에 추가됨";
    }

    cartButton.disabled = true;

    toast(`Successfully added ${data.name} to cart`, {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <img src={item.img} alt="" />
          </div>
          <div className="card-body">
            <div className="card-body-about">
              <p className="text-sm">{item.name}</p>
              <p className="text-sm">
                {item.symbol}
                {item.price} {item.currency}
              </p>
            </div>
            <div className="card-body-add">
              <button id={index} onClick={() => handleSelect(item, index)}>
                {pathname === "/" ? "Add to cart" : "장바구니에 추가"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
