var aniket = window.getSelection().toString();

var base_url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBRsyPLAs5o8hDbvJsOrFVmtl1aaNXdlN8";

var body = {
  contents: [
    {
      parts: [
        {
          text: `What does '${aniket}' mean in 2 line?`,
        },
      ],
    },
  ],
};

if (aniket) {
 
  const respe = fetch(base_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => {
    const response =resp.json()
    return response
  }).then((data)=>{
    alert(data.candidates[0].content.parts[0].text)
  })

}


