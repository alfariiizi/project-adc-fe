import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Check } from "lucide-react";
import { Maxwidthdiv } from "~/components/primary/max-width-div";
import {Link} from "~/components/ui/link";
import { PiLightning } from "react-icons/pi";

export default function Pricing() {
  return (
    <Maxwidthdiv id="pricing" className="">
      <div className="">
        {/* <div className="mx-auto max-w-2xl space-y-6 text-center"> */}
        {/*   <h1 className="text-center text-4xl font-semibold lg:text-5xl"> */}
        {/*     Pricing that Scales with You */}
        {/*   </h1> */}
        {/*   <p> */}
        {/*     Gemini is evolving to be more than just the models. It supports an */}
        {/*     entire to the APIs and platforms helping developers and businesses */}
        {/*     innovate. */}
        {/*   </p> */}
        {/* </div> */}

        <div className="grid gap-10 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Free</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $0 / year
              </span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Basic Analytics Dashboard",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="secondary" className="w-full">
                <Link to="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative">
            <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center px-3 py-1 text-xs font-medium text-primary-800 ring-1 ring-inset ring-white/20 ring-offset-1 bg-white ring-offset-gray-950/5">
              Popular
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Premium</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  $19 / year
                </span>
                <CardDescription className="text-sm">
                  Per editor
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Everything in Free Plan",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                    "Access to Community Forum",
                    "Single User Access",
                    "Access to Basic Templates",
                    "Mobile App Access",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Standard Security Features",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="">Get Started</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className="flex flex-col border border-primary-500">
            <CardHeader>
              <CardTitle className="font-medium flex gap-2">
                Storm <PiLightning className="text-yellow-500" />
              </CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $29 / year
              </span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Everything in Pro Plan",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="secondary" className="w-full">
                <Link to="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Maxwidthdiv>
  );
}
