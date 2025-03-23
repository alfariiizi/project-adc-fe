import { Maxwidthdiv } from "~/components/primary/max-width-div";
import Chatbot from "./components/Chatbot";
import PropmtSuggestion from "./components/PropmtSuggestion";
import Link from "~/components/ui/link";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";

export default function Index() {
  return (
    <div className="relative">
      {/* Playground */}
      <Maxwidthdiv className="py-32 flex flex-col gap-3 max-w-4xl">
        <div className="gap-10 flex-col mx-auto flex">
          <p className="text-4xl font-bold text-center font-display">
            Ask me anything
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
    </div>
  );
}
