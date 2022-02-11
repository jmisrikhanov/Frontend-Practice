// 3 ways to detect if the browser has lost access to the network

// 1. addEventListener version

window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// 2.onoffline version

window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};

// 3.when offline (Navigator.online) it should return false

Navigator.online;
