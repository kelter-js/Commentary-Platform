const getTimeDescription = (time: any) => {
  const currentTime = new Date();

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const difference = currentTime.getTime() - time.getTime();

  if (difference < HOUR) {
    return `${Math.round(difference / MINUTE)} minute(s) ago`;
  }

  if (difference < DAY) {
    return `${Math.round(difference / HOUR)} hour(s) ago`;
  }
   
  return `${Math.round(difference / DAY)} day(s) ago`;
}

export default getTimeDescription;