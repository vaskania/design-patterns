// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }
//
// Server.prototype.getUrl = function () {
//     return `https://${this.ip}:80`
// }

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }

}

const aws = new Server('AWS Kutaisi', "31.146.150.46")

console.log(aws.getUrl())