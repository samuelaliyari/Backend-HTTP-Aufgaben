const fs = require("fs")
const http = require("http")



const renderPage = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}



const server = http.createServer((req, res) => {
    let path = ""
    const adress = req.url
    if (adress.includes("images")) {
        const adressArr = adress.split("/")
        console.log(adress.split("/"))

        path = adressArr[2]
        console.log(path)

        renderPage(`./images/${path}`).then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
    } else if (adress.includes("pages")) {
        const adressArr = adress.split("/")
        console.log(adress.split("/"))

        path = adressArr[2]
        console.log(path)

        renderPage(`./pages/${path}`).then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
    }


    console.log(adress)
    switch (req.url) {
        // style
        case "/style":
            renderPage("./assets/css/style.css").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        // fonts
        case "/nunito":
            renderPage("./fonts/nunito.ttf").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        //pages
        case "/":
            renderPage("./pages/home.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;

    }

})
server.listen(4000, console.log("server running at 4000"))

