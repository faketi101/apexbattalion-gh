const form = document.getElementById("join_form");
form.addEventListener("submit", formHandler_mail);

function formHandler_mail(e) {
  e.preventDefault();
  console.log("submited");
  console.log(e.target.game.value);

  const email = e.target.email.value;
  const whyApex = e.target.why_apex.value;
  const gameName = e.target.game.value;
  const ign = e.target.ign.value;
  const kd = e.target.kd.value;
  const contact = e.target.contact.value;
  const social = e.target.social.value;

  if (!email || !whyApex || !gameName || !ign || !kd || !contact || !social) {
    return alert("Please fill all form the inputs");
  }

  let send_data = {
    email,
    whyApex,
    gameName,
    ign,
    kd,
    contact,
    social,
  };

  sendEmail(null, email, send_data);
  console.log(send_data);
}

function sendEmail(name, email, userdata) {
  let email_body = `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <style>
          .bg{
              font-family: helvetica;
              background: url("https://raw.githubusercontent.com/faketi101/apexbattalion-gh/main/img/apex_bg_1.png");
              background-position: center;
              background-size: cover;
              background-attachment: fixed;
              min-height: 100vh;
              color: #ffffff;
          }
          .mail{
              width: 800px;
              margin: 0 auto;
          }
          p{
              margin: 0;
              padding: 0;
              color: #ffffff;
          }
          h1{
            color: #ffffff;
          }
          h3{
              margin: 0;
              padding: 0;
              color: #ffffff;
          }
          .bold{
              padding-top: 15px !important;
              color: #c9df00 !important;
              font-weight: bold;
          }
          .user_body{
              width: 450px;
              margin: 0 auto; 
          }
        </style>
  </head>
  
    
  <body>
      <div class="bg">
          <div class="mail">
              <h1>Hey Apex ADMIN,  A Player has requested to join ${userdata.gameName} Team.</h1>
      <div class="user_body">
          <h3>User Info:</h3>
      <p class="bold">Q. Email</p>
      <p>${userdata.email}</p>
      <p class="bold">Q. Why do you want to join Apex Battalion?</p>
      <p>${userdata.whyApex}</p>
      <p class="bold">Q. Which game do you play?</p>
      <p>${userdata.gameName}</p>
      <p class="bold">Q. Which game do you play?</p>
      <p>${userdata.ign}</p>
      <p class="bold">Q. What's your kill death ratio/rank?</p>
      <p>${userdata.kd}</p>
      <p class="bold">Q. Provide contact info: (Phone Number, Address)</p>
      <p>${userdata.contact}</p>
      <p class="bold">Q. Your social links (Facebook / Discord / Youtube)</p>
      <p>${userdata.social}</p>
      </div>
          </div>
      </div>
  </body>
  </html>`;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "tamim85000@gmail.com",
    Password: "eucrmecylwafzfut",
    To: "theapexbattalion@gmail.com",
    From: "tamim85000@gmail.com",
    Subject: `New Apex Join Request`,
    Body: email_body,
  }).then((message) => {
    location.href = "./mail_success.html";
  });
}











function formHandler(e) {
  e.preventDefault();
  console.log("submited");
  console.log(e.target.game.value);

  const email = e.target.email.value;
  const whyApex = e.target.why_apex.value;
  const gameName = e.target.game.value;
  const ign = e.target.ign.value;
  const kd = e.target.kd.value;
  const contact = e.target.contact.value;
  const social = e.target.social.value;

  if (!email || !whyApex || !gameName || !ign || !kd || !contact || !social) {
    return console.log("Fill up all");
  }

  let send_data = {
    send: false,
    d_server: "829097314206613525",
    d_channel: "918094888652922941",
    d_user: false,
    data: {
      email: email,
      whyApex: whyApex,
      gameName: gameName,
      ign: ign,
      kd: kd,
      contact: contact,
      social: social,
    },
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/join_us", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  let json_data = JSON.stringify(send_data);
  // console.log(json_data);
  xhr.send(json_data);
  e.target.reset();
}
