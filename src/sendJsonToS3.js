const config = require('../config/config');
const AWS = require('aws-sdk');

AWS.config = new AWS.Config({
	"accessKeyId": config.AWS.key,
	"secretAccessKey": config.AWS.secret,
	"region": config.AWS.region
});

const S3 = new AWS.S3();

const filename = 'company.json';
const company = {
    "name": "Nvision"
};
const params = {"Bucket": config.AWS.bucket, "Key": filename, "Body": JSON.stringify(company)};

S3.putObject(params, function(err, data) {
    if (err) {
        return console.log(err, params);
    }

    console.log('Upload with success', params);
});

