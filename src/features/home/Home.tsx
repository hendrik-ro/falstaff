import FlexGroup from "../../components/FlexGroup";
import { sections } from "../../app/content";
import type { Section } from "../../types/content";
import style from "./Home.module.css";

function HomeSection({ section }: { section: Section }) {
  return (
    <div className={style.section}>
      <h3>{section.name}</h3>
      <p className={style.sectionDescription}>{section.description}</p>
      <FlexGroup
        internalContent={section.topics.map((topic) => ({
          title: topic.cardTitle ?? topic.title,
          path: `/${topic.path}`,
          tooltip: topic.tooltip,
        }))}
        externalContent={section.externalLinks}
        placeholders={section.placeholders}
      />
      <br style={{ marginBottom: "2rem" }} />
    </div>
  );
}

function HomeContent() {
  return (
    <div>
      <div className={style.groupedColumns}>
        {sections.map((s) => (
          <HomeSection key={s.name} section={s} />
        ))}
      </div>
    </div>
  );
}

function HomeHeaders() {
  return (
    <header>
      <h1>Falstaff</h1>
      <h2>Full Stack Cheat Sheet</h2>
      <p className={style.sectionDescription}>
        This cheat sheet is work in progress and is continuously updated.
      </p>
      <div className={style.legend}>
        <span className={style.externalLinks}>external links</span>
        <span className={style.internalLinks}>internal links</span>
        <span className={style.placeholders}>placeholders</span>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div>
      <HomeHeaders />
      <HomeContent />
    </div>
  );
}
