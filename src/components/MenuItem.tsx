import type { MenuItem } from "../types";

type ItemProps = {
  item: MenuItem;
  addItem:(item:MenuItem)=>void
};

export default function MenuItem({ item , addItem }: ItemProps) {
  return (
    <button 
      onClick={()=>addItem(item)}
      className="flex justify-between py-2 bg-teal-100 hover:bg-teal-400 border border-gray-200 px-4 rounded-md ">
      <p className="font-semibold">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
}
