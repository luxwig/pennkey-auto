
chrome.extension.sendRequest({method: "getUniPw"}, function(response) {
  var error = document.getElementsByClassName("form-error").length;
  if (error != 0)
  {
    alert('PennKey Auto Login - Credential Invalid');
    return;
  }
  NAME  = response.pennname;
  PASS = response.pw;
  if (null != NAME && null != PASS)
  {
    if (location.href.indexOf("weblogin.pennkey.upenn.edu") != -1)
    {
      var name  = document.getElementById("pennname");
      var pass = document.getElementById("password");
      if (name != null && pass != null)
      {
        name.value  = NAME;
        pass.value = PASS;
        document.getElementsByName("_eventId_proceed")[0].click();
      }
    }

  }

});
