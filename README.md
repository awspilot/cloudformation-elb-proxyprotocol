# cloudformation-templates




| Description / Resources   | Launch |
| ------------------------  | ------ |
| nodejs app to get the client ip address from ELB using proxy protocol <br/> `ELB` `ECS` |  [![Foo](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=elb-ecs-proxyprotocol&templateURL=https://raw.githubusercontent.com/awspilot/cloudformation-templates/master/elb-proxyprotocol/cloudformation-elb-proxyprotocol.yaml) |
| Lambda function to update A record with IPs from EC2s in Autoscale ( once per minute ) <br/> ``Lambda`` ``Route53`` `Autoscale` `CloudWatch Events` | [![Foo](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=elb-ecs-proxyprotocol&templateURL=https://raw.githubusercontent.com/awspilot/cloudformation-templates/master/autoscale-route53-ip/autoscale-route53-ip.yaml) |
| Lambda function to backup dynamodb table periodically <br/> `DynamoDB` `Lambda` `CloudWatch Events` |  |
| Github to Lambda ``commit -> npm install -> S3Zip -> Lambda `` |  |  | 
