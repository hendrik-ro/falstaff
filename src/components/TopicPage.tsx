import { NavLink, Outlet } from "react-router-dom";
import type { Chapter, Topic } from "../types/content";
import styles from "./TopicPage.module.css";

type TopicPageProps = {
  topic: Topic;
};

function chapterPath(topic: Topic, chapter: Chapter) {
  return chapter.path ? `/${topic.path}/${chapter.path}` : `/${topic.path}`;
}

/**
 * Reusable shell for every topic: header, chapter navigation derived from the
 * content structure and an outlet for the active chapter route.
 */
export default function TopicPage({ topic }: TopicPageProps) {
  return (
    <div>
      <header>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </header>
      {topic.chapters.length > 1 && (
        <nav className={styles.chapterNav}>
          <ul>
            {topic.chapters.map((chapter) => (
              <li key={chapter.name}>
                <NavLink
                  end
                  to={chapterPath(topic, chapter)}
                  className={({ isActive }) =>
                    isActive ? styles.activeChapterLink : styles.inactiveChapterLink
                  }
                >
                  {chapter.name}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <Outlet />
    </div>
  );
}
