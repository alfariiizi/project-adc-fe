import { MetaFunction } from "@remix-run/node";
import { Maxwidthdiv } from "~/components/primary/max-width-div";
import { FormAnalytics } from "./components/FormAnalytics";

export const meta: MetaFunction = () => {
  return [
    { title: "adc" },
    {
      property: "og:title",
      content:
        "Next-generation artificial intelligence for the modern enterprise.",
    },
    {
      name: "description",
      content:
        "Next-generation artificial intelligence for the modern enterprise.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-full w-full justify-center items-center pb-10 flex-col gap-40 md:gap-52">
      <Maxwidthdiv id="models" className="flex mt-10 flex-col gap-10 max-w-4xl">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center font-display">
          Challenge me to analyze something!
        </p>
        <FormAnalytics />
      </Maxwidthdiv>
    </div>
  );
}
