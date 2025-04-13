let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "gaurav",
    "email": "gaurav@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()  
    resultCont.innerHTML = '<img width=123px src="/img/loading.svg" alt="">'
    let email = document.getElementById("username").value
    let key = "ema_live_WsdTWeFtfM7tMv7527RiyxR0ZX7xE19UMUyd1Lwi"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key]!="" && result[key]!=" "){
            str = str + `<div>${key}:${result[key]}</div>`
        }
        
    }
    console.log(str)
    resultCont.innerHTML = str
})
