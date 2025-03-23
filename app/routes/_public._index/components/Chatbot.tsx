import { PlaceholdersAndVanishInput } from "./PlaceholdersAndVanishInput";

export default function Chatbot() {
  return (
    <div className="relative">
      <PlaceholdersAndVanishInput
        placeholders={[
          "Who is Gendon?",
          "What is the best football club in history?",
          "Why is the sky blue?",
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
