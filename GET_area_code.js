//Phone must be formatted like this "+12345678900"
// Input Data
const phoneNumber = $input.first().json.formattedNumber;

// Validate phone number
if (!phoneNumber) {
    throw new Error("Phone number is missing or undefined");
}

// Validate +1
if (!phoneNumber.startsWith("+1") || phoneNumber.length < 12 || !/^\+\d+$/.test(phoneNumber)) {
    throw new Error("Invalid E.164 phone number format. Expected +1 followed by 10 digits.");
}

// Get Area Code && validate if the output is 3 digits
const areaCode = phoneNumber.slice(2, 5);
if (areaCode.length !== 3 || !/^\d{3}$/.test(areaCode)) {
    throw new Error("Could not extract a valid 3-digit area code.");
}

return [{ json: { areaCode: areaCode } }];
