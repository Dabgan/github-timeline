const addLeadingZeros = (number) => {
    return number < 10 ? "0" + number : number;
};

const getMonthName = (date) => {
    const month = date.toLocaleString("en-us", { month: "short" });
    return month;
};

const formatDate = (date) => {
    const formattedDate = `
    ${addLeadingZeros(date.getDate())}
    - ${addLeadingZeros(getMonthName(date))}
    - ${date.getFullYear()}
     at ${addLeadingZeros(date.getHours())}
     :${addLeadingZeros(date.getMinutes())}
     :${addLeadingZeros(date.getSeconds())}`;
    return formattedDate;
};

export default formatDate;
