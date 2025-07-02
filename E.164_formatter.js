// Input Data
const phoneNumber = $input.first().json.selectedNumber;
const defaultCountryCode = "+1";

// Validate phone number
if (!phoneNumber) {
    throw new Error("Phone number is missing or undefined");
}

let cleanedNumber = phoneNumber.replace(/[^0-9]/g, ""); // Remove non-digit characters
cleanedNumber = cleanedNumber.replace(/^0+/, ""); // Remove leading zero if present

// Check if the input already includes the country code (+1)
let e164Number;
if (phoneNumber.startsWith("+1") && cleanedNumber.length >= 10) {
    // If input already has +1
    e164Number = `+${cleanedNumber}`;
} else {
    // Prepend default country code
    e164Number = `+${defaultCountryCode.replace(/\+/g, "")}${cleanedNumber}`;
}

// Validation
if (e164Number.length > 16 || !/^\+\d+$/.test(e164Number)) {
    throw new Error("Invalid phone number format or exceeds 15 digits");
}

// Return the formatted number
return [{ json: { formattedNumber: e164Number } }];
