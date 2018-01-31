# cloudformation-templates




| Resources  | Description  | Launch |
| ---------- | ------------ | ------ |
| ``ELB`` ``ECS`` | nodejs app to get the client ip address from ELB using proxy protocol  |  [![Foo](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=elb-ecs-proxyprotocol&templateURL=https://raw.githubusercontent.com/awspilot/cloudformation-templates/master/elb-proxyprotocol/cloudformation-elb-proxyprotocol.yaml) |
| ``Lambda`` ``Route53`` ``Autoscale`` ``CloudWatch Events``| Lambda function to update A record with IPs from EC2s in Autoscale ( once every minute ) |  |
| ``DynamoDB`` ``Lambda`` ``CloudWatch Events`` | Lambda function to backup dynamodb table periodically |
