/*
Links in this file change where the buttons link to in the FSK Modal on the welcome home page.
To add Benton 9am or Cabot 11am service times back in, uncomment the var and href lines.
NOTE - JS hangs if there's an unused variable when loading the htm page.
Only uncomment a line here if the corresponding button is uncommented on the html
*/


// West Little Rock registration links
  var wlr9am = document.getElementById('wlr9am');
  wlr9am.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68849"
  var wlr11am = document.getElementById('wlr11am');
  wlr11am.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68851"


// Benton registration links
  var benton9am = document.getElementById('benton9am');
  benton9am.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68859"
  var benton11am = document.getElementById('benton11am');
  benton11am.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68863"

//Cabot registration links
  var link = document.getElementById('cabot9am');
  link.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68867"
  var link = document.getElementById('cabot11am');
  link.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68871"

//Midtown registration link
  var link = document.getElementById('mid5pm');
  link.href = "https://my.fellowshipar.com/portal/event_detail.aspx?id=68877"
