import { PlaceholdersAndVanishInput } from "./PlaceholdersAndVanishInput";

export default function Chatbot() {
  return (
    <div className="relative">
      <PlaceholdersAndVanishInput
        placeholders={[
          "Why Product A has the best UX?",
          "How can Product A improve its marketing?",
          "What is the best feature of Product A?",
        ]}
        onSubmit={() => {}}
        onChange={() => {}}
      />
    </div>
  );
}

// <Chat
//   handleInputChange={() => {}}
//   handleSubmit={() => {}}
//   input=""
//   isGenerating={false}
//   messages={[{ id: "123", content: "TOL", role: "assistant" }]}
// />
