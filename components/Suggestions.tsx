"useClient";
import React, {  useState } from "react";
import SuggestionsList from "./SuggestionsList";
import SuggestionsHeader from "./SuggestionsHeader";
import { Feedback } from "@/app/page";

interface SuggestionsProps {
  feedbacks: Feedback[];
  selectedCategory: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  feedbacks,
  selectedCategory,
}) => {
  const [sortBy, setSortBy] = useState<string>("Most Upvotes");
  const totalFeedbacks =
    selectedCategory === "all"
      ? feedbacks.length
      : feedbacks.filter((feedback) => feedback.category === selectedCategory)
          .length;

  return (
    <div>
      <SuggestionsHeader
        totalFeedbacks={totalFeedbacks}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <SuggestionsList
        feedbacks={feedbacks}
        sortBy={sortBy}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Suggestions;
