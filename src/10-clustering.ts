import * as cluster from "cluster";
import * as https from "https";
import * as os from "os";

const cpus = os.cpus();

interface NasaResponse {
    url: string;
    title: string;
}

if (cluster.isMaster) {
    console.log(`${process.pid}: Master process is running`);

    // fork a process per cpu
    cpus.forEach((_) => cluster.fork());
    cluster.on("exit", (_) => console.log(`${process.pid}: Worker died`));

} else {
    console.log(`${process.pid}: Worker started`);

    // Workers can share any TCP connection
    httpRequest()
        .then((data) => {
            console.log(`${process.pid}: Response received\n  ${data.url}\n  ${data.title}`);
            process.disconnect();
        })
        .catch(console.error);
}

function httpRequest(): Promise<NasaResponse> {
    return new Promise((resolve, reject) => {
        https
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (response) => {
                let buffer = "";

                response
                    .on("data", (chunk) => buffer += chunk)
                    .on("end", () => {
                        resolve(JSON.parse(buffer));
                    });
            })
            .on("error", (err: Error) => reject(err));
    });
}
