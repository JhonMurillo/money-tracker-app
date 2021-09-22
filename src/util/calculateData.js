export default function calculate(details = []) {
    const total = details.reduce((acc, obj) => { return acc + obj.value; }, 0);
    const isClosed = details.every(({ isPaid }) => isPaid);
    const totalDetails = details.length;
    const totalDetailPaid = details.filter(({ isPaid }) => isPaid).length;
    const totalDetailUnPaid = totalDetails - totalDetailPaid;
    return {
        total,
        isClosed,
        totalDetails,
        totalDetailPaid,
        totalDetailUnPaid
    }
}