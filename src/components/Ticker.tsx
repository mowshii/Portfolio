import { tickerItems } from "@/data/site";

export function Ticker() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
            <span className="ticker-diamond" />
          </span>
        ))}
      </div>
    </div>
  );
}
