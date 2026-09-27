export type FlexGroupProps = {
  internalContent?: Array<Content>;
  externalContent?: Array<Content>;
  placeholders?: Array<string>;
};

type Content = {
  title: string;
  path: string;
  tooltip: string;
};
