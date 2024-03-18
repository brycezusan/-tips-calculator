import { useMemo, useState } from "react";
import { menuItems } from "../data";
import type { OrderItem, MenuItem, OrderId } from "../types";

function useOrden() {
  const [items] = useState(menuItems);
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip , setTip] =  useState(0)

  const addItem = (item: MenuItem) => {
    const existe = order.find((orderItem) => orderItem.id === item.id);

    if (existe) {
      const newOrder = order.map((state) => state.id === item.id ? 
      {...state , quantity:state.quantity+1}:state);
      
      setOrder(newOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder((prevState) => [...prevState, newItem]);
    }
  };

  const removeItem = (id:OrderId)=>{
    setOrder(prevState=>prevState.filter( state=>state.id !== id))
  }

  const reset =()=>{
    alert('Guardando Orden')
    setTimeout(() => {
      setOrder([])
      setTip(0)
    }, 1500);
  }

  const isEmpty = useMemo(()=>order.length === 0 ,[order]);

  return {
    items,
    order,
    isEmpty,
    tip,
    setTip,
    addItem,
    removeItem,
    reset
  };
}

export default useOrden;
