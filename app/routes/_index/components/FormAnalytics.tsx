import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

/*
 * Form
 * - Target: url (string) + description (string)
 * - Your url: url (string) + description (string)
 * - Type analytics: features | performance | security | seo | accessibility | best-practices | pwa | others
 * - Additional information: description (string)
 */

const formSchema = z
  .object({
    urlTarget: z.string().trim().min(1, "required").url(),
    urlSource: z.string().trim().url().optional(),
    typeAnalytics: z.enum([
      "features",
      "performance",
      "security",
      "seo",
      "accessibility",
      "best-practices",
      "pwa",
      "others",
    ]),
    additionalInformation: z.string().trim().optional(),
  })
  .refine((data) => data.urlSource !== data.urlTarget, {
    path: ["urlSource"], // Error will be attached to this field
    message: "URL to compare must be different from target URL",
  });

export function FormAnalytics() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="urlTarget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type your target url"
                  {...field}
                  endAdornment={
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="border-neutral-800"
                        >
                          🔥 Suggestion
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>
                          Your History Target URL
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem
                            className="flex flex-col gap-0 justify-start items-start"
                            onClick={() => {
                              field.onChange("https://your-competitor.com");
                            }}
                          >
                            <p className="text-neutral-300">
                              https://your-competitor.com
                            </p>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  }
                />
              </FormControl>
              <FormDescription>
                This is the url you want to analyze.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urlSource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL to Compare (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type your url you want to compare"
                  {...field}
                  endAdornment={
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="border-neutral-800"
                        >
                          🔥 Suggestion
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Suggestion URL</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem
                            className="flex flex-col gap-0 justify-start items-start"
                            onClick={() => {
                              field.onChange("https://your-account.com");
                            }}
                          >
                            <p>Your Account URL</p>
                            <p className="text-neutral-500">
                              https://your-account.com
                            </p>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  }
                />
              </FormControl>
              <FormDescription>
                This is the url you want to compare with.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeAnalytics"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Analytics Type</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(val) => field.onChange(val)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select analytics type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Analytics Type</SelectLabel>
                      {[
                        "features",
                        "performance",
                        "security",
                        "seo",
                        "accessibility",
                        "best-practices",
                        "pwa",
                        "others",
                      ].map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                This is the type of analytics you want to analyze.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additionalInformation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your additional information"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the additional information you want to include.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Start Analyzing</Button>
      </form>
    </Form>
  );
}
