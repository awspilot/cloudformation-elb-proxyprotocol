### cloudformation-elb-proxyprotocol
Cloudformation template ELB->ECS->nodejs to get the client ip address using proxy protocol 

###### Components
- **nodejs-app** sample nodejs app deployed to docker hub [awspilotcom/test-elb-proxyprotocol](https://hub.docker.com/r/awspilotcom/test-elb-proxyprotocol/)
- **cloudformation-template** ( see cloudformation-elb-proxyprotocol.yaml )



###### cloudformation-template 
- **EcsCluster** 
- **PermissiveFirewall** security group with all ports open, used both for EC2 instance and ELB
- **EC2InstanceProfile** and **EC2Role** allows ECS agent inside EC2 to comunicate with AWS 
- **LaunchConfig** defines the EC2 parameters ( instance type, **PermissiveFirewall**, **EC2InstanceProfile** ,init scripts )
- **Autoscale** launches N servers of type **LaunchConfig**, in our demo case just 1 :)
- **EcsTask** ECS Task Definition for our [awspilotcom/test-elb-proxyprotocol](https://hub.docker.com/r/awspilotcom/test-elb-proxyprotocol/) docker image ( memory, cpu, ports, environment ) 
- **EcsService** starts 1 **ECSTask** in **EcsCluster** and registers the tasks in the **ELB**
- **ELB** is the proxy in front of your app that gets the real IP address and forwards it to nodejs app using the proxy protocol


###### Notes
- you must have a Default VPC for it to work
- deployment can take anywhere from 5 to 20 mins
- the web address for the app can be found in Cloudformation stack output or in the EC2 console / Load Balancers DNSName 
- classic ELBs with TCP listeners requires ELB:PORT -> EcsTask:PORT mapping so you will only be able to start 1 **EcsTask** per server 
- you do not need this for HTTP/HTTPS listeners 
- this is usefull for example if you;re serving multiple sites over https and you want your node app to decide which SNI certificate to serve 
- the security group has all ports open, should not be used in production
- the EC2 do not have a kaypair, you won't be able to ssh in
