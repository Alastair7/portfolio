export type Stack = {
  id: string;
  name: string;
  path: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  stack: Stack[];
};
