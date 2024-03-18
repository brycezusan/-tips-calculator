import { SetStateAction } from "react";

type Props = {
  setTip:React.Dispatch<SetStateAction<number>>
}

export default function OrderTips({ setTip }:Props) {
  const tips = [
    { id: 1, label: "10%", value: 0.1 },
    { id: 2, label: "15%", value: 0.15 },
    { id: 3, label: "20%", value: 0.2 },
  ];
  return (
    <form>
      <h3 className="font-bold">Monto de Propina</h3>
      {tips.map((tip) => (
        <div key={tip.id} className="flex gap-2">
          <label className="font-semibold" htmlFor={tip.label}>
            {tip.label}
          </label>
          <input
            type="radio"
            id={tip.label}
            name="tip"
            value={tip.value}
            onChange={(e) => setTip(+e.target.value)}
          />
        </div>
      ))}
    </form>
  );
}
