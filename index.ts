import express from "express"
import links from "./links.json"
import buildHtml from "./build-html";

const app = express();
const port = 80;

// Define a route to serve the main HTML file
app.get('/', (req, res) => {
  const hostname = req.hostname;

  const rootLink = links["root"];

  let link: string | undefined = undefined;

  if (!hostname.startsWith("gay.kg")) {
    const subdomain = hostname.split('.')[0]
    link = links[subdomain as keyof typeof links]
  }

  if (!link) {
    return buildHtml(rootLink)
  }

  return res.send(buildHtml(link))
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
