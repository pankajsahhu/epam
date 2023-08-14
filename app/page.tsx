"use client";
import Sidebar from "@/components/Sidebar";
import Suggestions from "@/components/Suggestions";
import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";
import data from "../data.json";

export interface Feedback {
  id: number;
  title: string;
  category?: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}
export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

const Home = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const UpadateLSDummyData = () => {
    if (typeof window !== "undefined") {
      const existingFeedbacks = JSON.parse(
        localStorage.getItem("feedbacks") || "[]"
      );
      if (existingFeedbacks.length === 0) {
        localStorage.setItem("feedbacks", JSON.stringify(data.productRequests));
      }
    }
  };

  useEffect(() => {
    UpadateLSDummyData();
    const storedFeedbacks = JSON.parse(
      localStorage.getItem("feedbacks") || "[]"
    );
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.SideBar}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className={styles.mainContainer}>
        <Suggestions
          feedbacks={feedbacks}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Home;
