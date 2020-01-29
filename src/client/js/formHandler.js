function handleSubmit(event) {
    event.preventDefault()

    const baseUrl = 'http://localhost:8080/language';
    const text = document.getElementById('text').value;

    fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: text})
    })
      .then(res => res.json())
      .then(function (res){
        document.getElementById('results').innerHTML = res.language.lang;
        // console.log(res.language);
      }
    );
// //GET API text
//     const getText = async (text) => {
//       const res = await fetch(text)
//       try {
//         return await res.json();
//       } catch (error) {
//         console.log('error', error);
//       }
//     };
// //POST result
//     const postText = async (text = '', data = {}) => {
//       const response = await fetch(baseUrl, {
//         method: "POST",
//         credential: "same-origin",
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       try {
//         return await response.json()
//       } catch (error) {
//         console.log('error', error);
//       }
//     };
//
//     const returnResult = async () => {
//       const request = await fetch('/language');
//       try {
//         const allData = await request.json();
//         console.log(allData);
//         document.getElementById('results').innerHTML = allData.language;
//       } catch (error) {
//         console.log('error', error);
//       }};
};

export { handleSubmit }
