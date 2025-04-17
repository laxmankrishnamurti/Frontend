function InputBox({ label, amount, currencyOptions }) {
    return (
        <>
            <div className="w-1/3 bg-slate-400 p-4 rounded-md mx-auto mt-4 shadow-black shadow-md">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <div className="flex gap-2 mb-4">
                            <div>
                                <label htmlFor="inputNumber">{label}</label>
                                <input
                                    className="p-2 rounded-md"
                                    type="number"
                                    id="inputNumber"
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={(e) => setAmount(() => e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="fromCurrencySelection">Currency</label>
                                <select
                                    id="fromCurrencySelection"
                                    value={fromCurrency}
                                    onChange={(e) => setFromCurrency(() => e.target.value)}
                                >
                                    {
                                        currencyOptions.map((opt) => <option key={opt}>{opt}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div>
                                <label className="block" htmlFor="convertedAmount">To</label>
                                <input
                                    className="p-2 rounded-md"
                                    type="text"
                                    id="convertedAmount"
                                    placeholder="Converted amount"
                                    value={convertedAmount}
                                />
                            </div>
                            <div className="ml-4">
                                <label htmlFor="toCurrencySelection">Currency</label>
                                <select
                                    className="block"
                                    id="toCurrencySelection"
                                    value={toCurrency}
                                    onChange={(e) => setToCurrency(() => e.target.value)}
                                >
                                    {
                                        currencyOptions.map((opt) => <option key={opt}>{opt}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-md mt-8"
                            onClick={convertAmount}
                        >Convert {fromCurrency} to {toCurrency}</button>
                        <button
                            className="bg-sky-400 ml-4 text-black px-4 py-2 rounded-md mt-8"
                            onClick={swapCurrency}
                        >Swap Currency</button>
                    </div>
                </form>

                <div className="mt-4 text-center text-xs">
                    <p>Input amount value is {amount}</p>
                    <p className="text-amber-950">Converted amount value is {convertedAmount}</p>
                </div>
            </div>
        </>
    )
}

export default InputBox