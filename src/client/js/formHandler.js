function handleSubmit(event) {
    event.preventDefault()

    const baseUrl = 'http://localhost:8080/sentiment';
    const url = document.getElementById('url').value;

    if (Client.urlChecker(url)) {
    fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: url})
    })
      .then(res => res.json())
      .then(function (res){
        document.getElementById('polarity').innerHTML = res.sentiment.polarity
        document.getElementById('subjectivity').innerHTML = res.sentiment.subjectivity
        document.getElementById('polarity-conf').innerHTML = res.sentiment.polarity_confidence
        document.getElementById('subjectivity-conf').innerHTML = res.sentiment.subjectivity_confidence
        document.getElementById('text-fragment').innerHTML = res.sentiment.text
        console.log(res.sentiment.text);
      })
    } else {
      alert('Please type the valid url!');
    }
};

export { handleSubmit }
