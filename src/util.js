// export default function formartCurrency(num) {
//   return "$" + Number(num.toFix(1)).toLocaleString() + ""
// }

export default function formatCurrency(num) {
  return `$ ${Number(num.toFixed(1)).toLocaleString() }`
}