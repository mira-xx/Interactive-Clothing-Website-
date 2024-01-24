const Ajv = require("ajv");
const ajv = new Ajv();

Promise.all([
	fetch("./data.json").then(response => response.json()),
	fetch("./schema.json").then(response => response.json())
]).then(([data, schema]) => {
	const validate = ajv.compile(schema);
	const valid = validate(data);
  
	if (!valid) {
		console.log(validate.errors);
	} else {
		console.log("JSON data is valid");
	}
});