# cloudformation-templates




| Description  | Resources  | Launch |
| ---------- | ------------ | ------ |
| nodejs app to get the client ip address from ELB using proxy protocol | ``ELB`` ``ECS``   |  [![Foo](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=elb-ecs-proxyprotocol&templateURL=https://raw.githubusercontent.com/awspilot/cloudformation-templates/master/elb-proxyprotocol/cloudformation-elb-proxyprotocol.yaml) |
| Lambda function to update A record with IPs from EC2s in Autoscale ( once every minute ) | ``Lambda`` ``Route53`` ``Autoscale`` ``CloudWatch Events``   |  |
| Lambda function to backup dynamodb table periodically | ``DynamoDB`` ``Lambda`` ``CloudWatch Events`` |  |
