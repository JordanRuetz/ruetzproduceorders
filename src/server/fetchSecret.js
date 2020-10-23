const AWS = require('aws-sdk')

/*
 * Class to managing fetching secrets from AWS Secrets Manager
 */
class SecretManager {
    constructor(region = "us-east-1") {
        this.awsClient = new AWS.SecretsManager({
            region: region
        })
    }

    async getSecret(secretName) {
        return new Promise((resolve, reject) => {
            let secret = "";

            this.awsClient.getSecretValue({SecretId: secretName}, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    if ('SecretString' in data) {
                        secret = data.SecretString;
                    } else {
                        reject("Failed fetching secret: 'SecretString' not in data")
                    }
                }
                resolve(secret)
            });
        })
    }
}

module.exports = {SecretManager}