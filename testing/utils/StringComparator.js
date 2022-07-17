export class StringComparator {
  compareStrings(string1, string2) {
    if (typeof string1 === "number")
      throw new Error(`${string1} is not a string`);
    if (typeof string2 === "number")
      throw new Error(`${string2} is not a string`);

    return string1 === string2;
  }
}
