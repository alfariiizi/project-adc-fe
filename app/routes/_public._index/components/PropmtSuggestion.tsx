import { Typography } from "~/components/primary/typography";
import Link from "~/components/ui/link";

const messages = [
  "What is the capital of Indonesia?",
  "Who won the 2022 FIFA World Cup?",
  "Give me the best fried rice recipe",
];

export default function PropmtSuggestion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
      {messages.map((message) => (
        <Link
          key={message}
          to={`/app?message=${encodeURIComponent(message)}`}
          variant="secondary"
          className="text-wrap h-fit"
        >
          <Typography size="small" className="text-gray-300">
            {message}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
