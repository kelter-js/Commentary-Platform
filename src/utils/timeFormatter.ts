const getTimeDescription = (time: any) => {
  const currentTime = new Date();

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const difference = currentTime.getTime() - time.getTime();

  if (difference < HOUR) {
    return `${Math.round(difference / MINUTE)} minutes ago`;
  }

  if (difference < DAY) {
    return `${Math.round(difference / HOUR)} hours ago`;
  }
   
  return `${Math.round(difference / DAY)} days ago`;
}

export default getTimeDescription;