function notification(){
    console.log('registering...');
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");}
    function requestNotificationPermission() {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          // you can now send notifications
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
    function sendNotification() {
        if (Notification.permission === "granted") {
          var notification = new Notification("Hi there!", {
            body: "Thank you for joining us!", // body text of the notification
          });
      
          // Play sound
          var audio = new Audio('I Phone – Notification Ringtone Download - MobCup.Com.Co.mp3'); // Path to your sound file
          audio.play();
      
          // Optional: Handle the notification click event
          notification.onclick = function () {
            window.open("https://www.example.com"); // Open a URL upon clicking the notification
          };
        } else {
          console.log("Permission to send notifications is denied.");
        }
      }
    requestNotificationPermission();
    sendNotification();
}

document.getElementById('reg').addEventListener('click', function() {
    notification();
    
})