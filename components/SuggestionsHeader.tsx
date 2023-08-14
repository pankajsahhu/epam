import React from "react";
import styles from "../styles/suggestionsHeader.module.scss";
import IconSuggestions from "public/assets/suggestions/icon-suggestions.svg";
import IconArrowUp from "public/assets/shared/icon-arrow-up-white.svg";
import IconCheck from "public/assets/shared/icon-check.svg";
import Image from "next/image";
import Link from "next/link";
interface SuggestionsHeaderProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  totalFeedbacks: number;
}

const SuggestionsHeader: React.FC<SuggestionsHeaderProps> = ({
  sortBy,
  setSortBy,
  totalFeedbacks,
}) => {
  return (
    <div className={styles.suggestionsHeader}>
      <div className={styles.HeadingLift}>
        <div className={styles.quantity}>
          <Image src={IconSuggestions} alt="Suggestions" />
          <h3 className={styles.suggestionHead}>
            <span>{totalFeedbacks}</span> Suggestions
          </h3>
        </div>
        <div className={styles.sort}>
          <div className={styles.sortLabel}>
            Sort by : <span className="text-bold">{sortBy}</span>{" "}
            <Image src={IconArrowUp} alt="arrow up" />
          </div>
          <div className={`dropdown ${styles.sortDropdown}`}>
            <div
              className={sortBy === "Most Upvotes" ? "active" : ""}
              onClick={() => setSortBy("Most Upvotes")}
            >
              Most Upvotes <Image src={IconCheck} alt="Icon check" />
            </div>
            <div
              className={sortBy === "Least Upvotes" ? "active" : ""}
              onClick={() => setSortBy("Least Upvotes")}
            >
              Least Upvotes <Image src={IconCheck} alt="Icon check" />
            </div>
            <div
              className={sortBy === "Most Comments" ? "active" : ""}
              onClick={() => setSortBy("Most Comments")}
            >
              Most Comments <Image src={IconCheck} alt="Icon check" />
            </div>
            <div
              className={sortBy === "Least Comments" ? "active" : ""}
              onClick={() => setSortBy("Least Comments")}
            >
              Least Comments <Image src={IconCheck} alt="Icon check" />
            </div>
          </div>
          <div className={styles.blank}></div>
        </div>
      </div>
      <div>
        <button className="btn bg-purple btn-hover">+ Add Feedback</button>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
