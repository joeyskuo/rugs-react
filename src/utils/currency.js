
const usDollar = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const convertToDollar = (amount) => usDollar.format(amount);

export default convertToDollar;