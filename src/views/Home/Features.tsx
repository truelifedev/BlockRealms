import classNames from "classnames";

const Features = () => {
  return (
    <div className="features-section">
      <div
        className={classNames({
          "container max-w-5xl px-4 mx-auto text-gray-800 dark:text-gray-100":
            true,
        })}
      >
        <div className="border-green-300 border-10 box-shadow text-center py-6 px-2 bg-green-100 mb-10">
          <div className="max-w-xl mx-auto">
            <h3 className="font-mono text-center text-green-200 text-lg sm:text-2xl text-shadow-sm">
              BUY CRITTERZ
            </h3>
            <div className="leading-none mb-4">
              Buy and stake Genesis Critterz to gain access to a P2E Minecraft
              world and start generating $BLOCK while playing.
            </div>
            <div className="flex justify-center">
              <a
                href="https://opensea.io/collection/critterznft"
                className="bg-blue-500 hover:bg-blue-600 px-11 py-1 text-gray-100 text-3xl"
              >
                Buy on OpenSea
              </a>
            </div>
          </div>
        </div>
        <div className="border-gray-700 border-10 box-shadow text-center py-6 px-2 bg-blue-200 mb-10">
          <div className="max-w-xl mx-auto">
            <h3 className="font-mono text-center text-green-200 text-lg sm:text-2xl text-shadow-sm">
              STAKE CRITTERZ
            </h3>
            <div className="leading-none mb-4">
              Stake Critterz to access unique mechanics such as renting, Plot
              claiming, and $BLOCK generation.
            </div>
            <div className="flex justify-center">
              <a
                href="https://opensea.io/collection/critterznft"
                className="block bg-green-300 hover:bg-green-200 px-11 py-1 text-gray-100 text-3xl"
              >
                Launch dApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-green-300 border-10 box-shadow text-center py-6 px-2 bg-yellow-100 mb-10">
          <div className="max-w-xl mx-auto">
            <h3 className="font-mono text-center text-green-200 text-lg sm:text-2xl text-shadow-sm">
              LEARN MORE
            </h3>
            <div className="leading-none mb-4">
              New rental utilities, a custom-made Oracle, unique tokenomics, and
              advanced staking mechanisms makes Critterz one of the most
              ambitious NFT projects today.
            </div>
            <div className="flex max-w-lg mx-auto justify-center grid grid-cols-2 gap-5">
              <a
                href="https://opensea.io/collection/critterznft"
                className="bg-green-300 hover:bg-green-200 px-4 py-1 text-gray-100 text-3xl"
              >
                Whitepaper
              </a>
              <a
                href="https://opensea.io/collection/critterznft"
                className="bg-green-300 hover:bg-green-200 px-4 py-1 text-gray-100 text-3xl"
              >
                Project Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
