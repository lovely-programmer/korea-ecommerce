import { data } from "../constants/index";

export default function Cards({ cart, setCart }) {
  const handleSelect = (data) => {
    setCart([...cart, data]);
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
              <p className="text-sm">${item.price}.00 USD</p>
            </div>
            <div className="card-body-add">
              <p onClick={() => handleSelect(item)}>Add to cart</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
