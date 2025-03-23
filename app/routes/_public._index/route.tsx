import { Maxwidthdiv } from "~/components/primary/max-width-div";
import Chatbot from "./components/Chatbot";
import PropmtSuggestion from "./components/PropmtSuggestion";
import Link from "~/components/ui/link";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";
import { WobbleCard } from "./components/WobbleCard";

export default function Index() {
  return (
    <div className="">
      <div className="absolute top-32 right-10 size-[200px] hidden md:block rounded-full bg-primary-400/25 blur-3xl" />

      {/* Playground */}
      <Maxwidthdiv id="models" className="py-32 flex flex-col gap-3 max-w-4xl">
        <div className="gap-10 flex-col mx-auto flex">
          <p className="text-4xl font-bold text-center font-display">
            Ask me about your competitors
          </p>
          <PropmtSuggestion />
          <Chatbot />
        </div>
        <div className="w-full flex gap-3 flex-wrap">
          <Link to="/app" variant="secondary" icon={<TbDeviceAnalytics />}>
            Analytics Competitor
          </Link>
          <Link to="/app" variant="secondary" icon={<RiWechatLine />}>
            General Prompting
          </Link>
        </div>
      </Maxwidthdiv>

      {/* Features */}
      <Maxwidthdiv
        id="features"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-20"
      >
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-primary-700 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-neutral-500">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-900">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
        </WobbleCard>
      </Maxwidthdiv>
    </div>
  );
}
