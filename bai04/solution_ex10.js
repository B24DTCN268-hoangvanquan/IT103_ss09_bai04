

const hotelBooking = {
    bookingId: "BK-2026-9912",
    guestName: "Nguyễn Văn An",
    roomPrice: 2000000,
    "check-in-hour": 14,
    "room number": 502
};

console.log("--- 1. TRUY CẬP QUA BIẾN ĐỘNG ---");

const dynamicKey = "roomPrice";

const priceFail = hotelBooking.dynamicKey;
console.log("[Dot Notation] hotelBooking.dynamicKey:", priceFail);

const priceSuccess = hotelBooking[dynamicKey];
console.log("[Bracket Notation] hotelBooking[dynamicKey]:", priceSuccess);


console.log("\n--- 2. KEY CHỨA KÝ TỰ ĐẶC BIỆT ---");

const checkInHour = hotelBooking["check-in-hour"];
const roomNumber = hotelBooking["room number"];
console.log("[Bracket Notation] hotelBooking['check-in-hour']:", checkInHour); // 14
console.log("[Bracket Notation] hotelBooking['room number']:", roomNumber);   // 502


console.log("\n--- 3. DUYỆT ĐỐI TƯỢNG BẰNG FOR...IN ---");

console.log("=== CÁCH SAI (Dùng Dot Notation) ===");
for (const key in hotelBooking) {
    console.log(`${key}: ${hotelBooking.key}`);
}

console.log("\n=== CÁCH ĐÚNG (Dùng Bracket Notation) ===");
for (const key in hotelBooking) {
    console.log(`${key}: ${hotelBooking[key]}`);
}