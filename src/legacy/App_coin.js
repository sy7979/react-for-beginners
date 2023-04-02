import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const [option, setOption] = useState({});
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log('loaded')
      });
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    if (value !== "") {
      setDollar(parseInt(event.target.value));
      return;
    }
    setDollar(event.target.value);
  };

  const onSubmit = () => {
    setDollar("");
  };

  const onSelect = (event) => {
    const targetOption = event.target.selectedOptions[0].dataset;
    setOption({ symbol: targetOption.symbol, coin: targetOption.coin });
    console.log(option);
  };

  return (
    <>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
            <input type="number" value={dollar} onChange={onChange} />
            <button onClick={onSubmit}>취소</button>
          <h2>
            {option.symbol
              ? `${option.coin * dollar} USD / 1 ${option.symbol}`
              : null}
          </h2>
          <hr />
          <select onChange={onSelect}>
            {coins.map((coin) => {
              return (
                <option
                  key={coin.id}
                  data-coin={coin.quotes.USD.price}
                  data-symbol={coin.symbol}
                >
                  {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
}

export default App;
