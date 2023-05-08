import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [operation, setOperation] = useState("+");

  const onSubmit = (e) => {
    e.preventDefault();
    let data = operation+amount;

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +data,
    });

    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="ingresa una descripción"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <select
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">Ingreso</option>
          <option value="-">Gasto</option>
        </select>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          placeholder="0.00"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button
          className="bg-cyan-500 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
          disabled={!description || !amount}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
