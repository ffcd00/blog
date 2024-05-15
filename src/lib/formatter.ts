export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(date);
};

export const formatReadTime = (minutes: number): string => {
  return `${minutes} min`;
};
