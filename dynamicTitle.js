window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "ðŸ¥º PLZ COME BACK ðŸ¥º";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "https://bit.ly/apnatvin";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "https://bit.ly/apnatvin";
    } else {
        document.title = attentionMessage;
        favicon.href = "https://bit.ly/apnatvin";
    }
  }   
};
