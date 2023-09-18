function validate(event){
  const formid="#"+$(event).closest("form").attr('id');
  for (const el of document.querySelector(formid).querySelectorAll("[required]")) {
    if (!el.reportValidity()) {
      return;
    }
  }
  sendEmail(formid);
}
function sendEmail(formid){
  $.ajax({
    url: "https://formsubmit.co/ajax/4e605ab38991b1317816ae2fefd10780",
    method: "POST",
    data: {
        Name:$(formid+" #inputName").val(),
        Number:$(formid+" #inputNumber").val(),
        Email:$(formid+" #inputEmail").val(),
        Address:$(formid+" #inputAddress").val(),
        Message:$(formid+" #inputMessage").val()
    },
    dataType: "json",
    success: function () {
      alert("Form Submitted");
    },
    error: function () {
      alert("Form Submition failed");
    }
  });

  
  $(formid).trigger("reset");
}