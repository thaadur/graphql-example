import gql from "graphql-tag";
export const PAYMENT_TRANSACTION_STATUS = gq1`
query PaymentTransactionStatus($appointmentId: String!) { 
paymentTransactionStatus (appointmentId: $appointmentId) { 
appointment { 
amountPaid 
paymentRefId 
bankTxnId
displayId
responseMessage
paymentDateTime 
paymentStatus 
amountBreakup { 
plansPurchased 
plansPurchasedwith
saving_amount
planValidity
couponCode
bookingFee
}
}
}
