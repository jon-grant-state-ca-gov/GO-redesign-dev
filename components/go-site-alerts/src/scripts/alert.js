window.addEventListener("load", () => {
  const alertClose = document.querySelectorAll("#cagov-alerts .ca-gov-close-icon");
    
  alertClose.forEach(closeIcon => {
    closeIcon.addEventListener("click", (e) => {
        var alert_id = e.target.dataset.alert; 
        document.cookie = 'cagov-alert-' + alert_id + '=false;path=/';
    
        e.target.parentElement.parentElement.remove();
      });
  });
 
});
