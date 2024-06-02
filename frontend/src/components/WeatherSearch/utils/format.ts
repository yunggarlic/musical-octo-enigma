export const formatTime = (time: string) => {
  const [year, month, day] = time.split(" ")[0].split("-");
  return `${month}/${day}/${year}`;
};

export const formatTemp = (temp: number) => {
  return `${Math.round(temp)}°`;
};
