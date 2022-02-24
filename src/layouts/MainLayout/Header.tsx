import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import { UserState } from "bnc-onboard/dist/src/interfaces";
import classNames from "classnames";
import { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import { useOnboardContext } from "../../context/OnboardContext";
import useTheme from "../../hooks/useTheme";

const navigation = [
  { name: "Home", href: "/#story" },
  { name: "Stake", href: "/#team" },
  { name: "Block", href: "/#faq" },
  { name: "Map", href: "/#faq" },
  { name: "Marketplace", href: "/#faq" },
  { name: "Whitepaper", href: "/#faq" },
];

const Header = () => {
  const { isDark } = useTheme();
  const { setup, onboard } = useOnboardContext();

  const handleConnectWallet = async () => {
    onboard.config({ darkMode: isDark });
    setup();
  };

  const userState: UserState = onboard.getState();
  const { address } = userState;
  let addressShorten = "";
  if (address) {
    addressShorten = `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
      address.length
    )}`;
  }
  return (
    <div
      className={classNames({
        "bg-green-300 text-white": true,
      })}
    >
      <div
        className={classNames({
          "container max-w-5xl mx-auto p-4 flex justify-between items-center text-gray-100 dark:text-gray-900":
            true,
        })}
      >
        <Popover className={"w-full"}>
          <div className="relative">
            <nav className="relative flex items-center justify-between sm:h-10">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <HashLink
                    to="/"
                    className={"text-indigo-700 dark:text-indigo-200 uppercase"}
                  >
                    <img src="/logo192.png" alt="logo" className="w-16" />
                  </HashLink>
                  <div className="flex items-center md:hidden">
                    <Popover.Button className="bg-green-300 rounded-md p-2 inline-flex items-center justify-center text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8 items-center">
                {navigation.map((item) => (
                  <HashLink
                    key={item.name}
                    to={item.href}
                    className="font-medium text-gray-100 hover:text-gray-400"
                    smooth
                  >
                    {item.name}
                  </HashLink>
                ))}
                <button
                  onClick={handleConnectWallet}
                  className={classNames({
                    "h-10 border-2 px-4 rounded-full mr-2 flex items-center border-gray-400 hover:border-gray-100 text-gray-100":
                      true,
                  })}
                >
                  {addressShorten ? (
                    <img
                      src={userState.wallet.icons.iconSrc}
                      alt="wallet-icon"
                      width="28px"
                    />
                  ) : null}
                  <div>
                    {addressShorten ? `${addressShorten}` : "Connect Wallet"}
                  </div>
                </button>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
            >
              {({ close }) => (
                <div className="bg-green-300 shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <HashLink
                        to="/"
                        className={
                          "text-indigo-700 dark:text-indigo-200 uppercase"
                        }
                        smooth
                      >
                        <img src="/logo192.png" alt="logo" className="w-16" />
                      </HashLink>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-green-300 rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        smooth
                        className="block px-3 py-1 rounded-md font-medium text-gray-100 hover:text-gray-400"
                      >
                        {item.name}
                      </HashLink>
                    ))}
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          close();
                          handleConnectWallet();
                        }}
                        className={classNames({
                          "h-10 border-2 px-4 rounded-full mr-2 flex items-center border-gray-400 hover:border-gray-100 text-gray-100":
                            true,
                        })}
                      >
                        {addressShorten ? (
                          <img
                            src={userState.wallet.icons.iconSrc}
                            alt="wallet-icon"
                            width="28px"
                          />
                        ) : null}
                        <div>
                          {addressShorten
                            ? `${addressShorten}`
                            : "Connect Wallet"}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
