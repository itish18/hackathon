export const calcDateUploaded = (date) => {
  const todayDate = new Date();
  const hackDate = new Date(date);
  return Math.floor((todayDate - hackDate) / (1000 * 60 * 60 * 24));
};

export const convertUploadedDate = (date, showYear = false) => {
  const dateObj = new Date(date);
  const uploadedDate = dateObj.getDate();
  const year = dateObj.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  return !showYear
    ? `${uploadedDate} ${month}`
    : `${uploadedDate} ${month} ${year}`;
};
