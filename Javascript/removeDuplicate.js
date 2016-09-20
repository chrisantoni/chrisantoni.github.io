function removeDuplicate(string) {
  string.sort()
   return Array.from(new Set(string));
}

console.log(removeDuplicate(["Antarctica", "Afghanistan", "Austria", "Antigua and Barbuda", "Antarctica", "Albania", "Algeria", "Austria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Argentina", "Antigua and Barbuda", "Armenia", "Austria", "Aruba",
"Australia", "Austria", "Azerbaijan"]))


// var array = new Set(["Antarctica", "Afghanistan", "Austria", "Antigua and Barbuda", "Antarctica", "Albania", "Algeria", "Austria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Argentina", "Antigua and Barbuda", "Armenia", "Austria", "Aruba",
// "Australia", "Austria", "Azerbaijan"])
//
// console.log(array);
