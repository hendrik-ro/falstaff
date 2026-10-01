import type { ComponentType } from "react";

export type PageLoader = () => Promise<{ default: ComponentType }>;

export type Chapter = {
  name: string;
  path: string;
  loader: PageLoader;
};

export type Topic = {
  title: string;
  cardTitle?: string;
  description: string;
  tooltip: string;
  path: string;
  chapters: Chapter[];
};

export type ExternalLink = {
  title: string;
  path: string;
  tooltip: string;
};

export type Section = {
  name: string;
  description: string;
  topics: Topic[];
  externalLinks?: ExternalLink[];
  placeholders?: string[];
};
