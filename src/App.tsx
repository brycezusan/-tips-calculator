import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import Order from "./components/Order";
import OrderDetails from "./components/OrderDetails";
import useOrden from "./hooks/useOrden";

function App() {
  const { items, isEmpty, order, tip, setTip, addItem, removeItem, reset } =
    useOrden();

  return (
    <>
      <Header />
      <main className="w-11/12 lg:w-4/6 mx-auto py-16  grid grid-cols-2 gap-6">
        <section>
          <h2 className="text-center text-2xl font-bold text-slate-800">
            Menu
          </h2>

          <section className="my-12 flex flex-col p-4 rounded-md gap-3 border w-full">
            {items.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </section>
        </section>
        <section>
          <h2 className="text-center text-2xl font-bold text-slate-800">
            Consumo
          </h2>

          <section className="border rounded-lg space-y-2 border-dashed my-12 p-4">
            {isEmpty ? (
              <p className="font-bold text-slate-800 text-lg">
                Agrega platos a tu orden
              </p>
            ) : (
              order?.map((ord) => (
                <Order key={ord.id} order={ord} removeItem={removeItem} />
              ))
            )}

            {!isEmpty && <OrderDetails order={order} tip={tip} setTip={setTip} reset={reset}/>}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
