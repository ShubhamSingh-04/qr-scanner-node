
function getIndianTime() {

    const date = new Date();
    const IST_OFFSET = 5.5 * 60 * 60000; // 5.5 hours in milliseconds
    const istDate = new Date(date.getTime() + IST_OFFSET);

    return istDate
}

export default getIndianTime;