export const appTitle = (title?: string): string | undefined => {
  if (!title) {
    return "OWLtop";
  }

  if (title.trim().length !== 0) {
    return `${title.trim()} | OWLtop`;
  }

  return "OWLtop";
};
