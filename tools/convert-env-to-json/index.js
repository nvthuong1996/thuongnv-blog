var http = require("http");
const { parse } = require('dotenv');
const fs = require('fs')
const YAML = require('json-to-pretty-yaml');


const toEnvK8s = (env) => {
    const p = parse(env);
    const result = []
    Object.keys(p).forEach((key)=>{
       result.push({name:key,value:p[key]})
    })
    return YAML.stringify(result)
};

//create a server object:
http
  .createServer(function(req, res) {
    const envContent = fs.readFileSync('./.env.example')
    const p = parse(envContent)
    const yamlK8s = toEnvK8s(envContent)
    const w = `
${JSON.stringify(p)}

==========================

${yamlK8s}
    `

    res.write(w);
    res.end();
  })
  .listen(8080);
