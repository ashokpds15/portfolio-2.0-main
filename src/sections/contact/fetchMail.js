const fetchData = (formState,onSubmit, onError) => {
  const inputData = {
    personalizations: [
      {
        to: [{ email: "ashokpds15@gmail.com" }],
        from: formState.email,
        content: [
          {
            type: "text/plain",
            value: `from ${formState.username} : ${formState.content} \n ${formState.email}`,
          },
        ],
      },
    ],
  };

  fetch("/api/sendmail", {
    method: "post",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "1b643877edmsh101a449255820f7p19053ajsn26cdb0bbc66d",
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    body: JSON.stringify(inputData),
  })
    .then(onSubmit)
    .catch(onError);
};

export default fetchData