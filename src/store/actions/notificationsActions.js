export function addNotification(message){
  return({
    type: "NOTIFICATION_ADD",
    message: message
  })
}