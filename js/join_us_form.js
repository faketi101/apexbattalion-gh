const form = document.getElementById("join_form");
form.addEventListener("submit", formHandler);

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
