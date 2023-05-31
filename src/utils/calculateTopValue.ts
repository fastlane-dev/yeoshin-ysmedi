export function calculateTopValue(input: number) {
  if (input < 500) {
    return 58;
  } else if (input >= 500 && input < 600) {
    return 63;
  } else if (input >= 600 && input < 700) {
    return 66;
  } else if (input >= 700 && input < 800) {
    return 74;
  } else if (input >= 800 && input <= 900) {
    return 80;
  } else if (input >= 900 && input < 1300) {
    return 68;
  } else if (input >= 1300 && input < 1600) {
    return 70;
  } else if (input >= 1600 && input < 1700) {
    return 77;
  } else if (input >= 1700 && input < 1800) {
    return 80;
  } else if (input >= 1800 && input < 1920) {
    return 82;
  } else if (input >= 1920) {
    return 84;
  }
}
