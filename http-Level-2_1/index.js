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
    console.log(req.url)


    switch (req.url) {
        case "/":

            renderPage("./pages/home.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))

            break;
        case "/about":
            renderPage("./pages/about.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/contact":
            renderPage("./pages/contact.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/faq":
            renderPage("./pages/faq.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/style.css":
            renderPage("./assets/style.css").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/homebg":
            renderPage("./images/home.jpeg").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/aboutbg":
            renderPage("./images/about.jpeg").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/contactbg":
            renderPage("./images/contact.png").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/faqbg":
            renderPage("./images/faq.jpeg").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
        case "/404bg":
            renderPage("./images/404.jpeg").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;

        default:
            renderPage("./pages/404.html").then(data => res.write(data)).then(() => res.end()).catch(err => console.log(err))
            break;
    }
})
const PORT = 8080
server.listen(PORT, console.log("server running at " + PORT))