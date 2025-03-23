import { Typography } from "~/components/primary/typography";
import Link from "~/components/ui/link";

const messages = [
  "What feature of product A do users love the most?",
  "Is there any suggestion to improve my product relatively to my competitors product?",
  "How they are marketing their product?",
];

export default function PropmtSuggestion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
      {messages.map((message) => (
        <Link
          key={message}
          to={`/app?message=${encodeURIComponent(message)}`}
          variant="secondary"
          className="text-wrap h-full opacity-50 text-start"
        >
          <Typography size="small" className="text-gray-300" align="left">
            {message}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
