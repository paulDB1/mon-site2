src="http://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
  crossorigin="anonymous">

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=saint-tropez&units=metric&appid=78ec5a8819beb601a2cd77de24a38b24')
.then(response => response.json())
.then(responseJson => console.log(responseJson.main.temp))  


window.fetch('http://api.openweathermap.org/data/2.5/weather?q=saint-tropez&lang=fr&units=metric&appid=78ec5a8819beb601a2cd77de24a38b24')
.then(response => response.json())
.then(responseJson => console.log(responseJson.weather[0].description))

