### cloudformation-elb-proxyprotocol
Cloudformation template ELB->ECS->nodejs to get the client ip address using proxy protocol 

##### Components
- **nodejs-app** sample nodejs app deployed to docker hub [awspilotcom/test-elb-proxyprotocol](https://hub.docker.com/r/awspilotcom/test-elb-proxyprotocol/)
- **cloudformation-template** 



###### cloudformation-template 
- **PermissiveFirewall** security group with all ports open, used both for EC2 instance and ELB
- **EC2InstanceProfile** and **EC2Role** allows ECS agent inside EC2 to comunicate with AWS 
- **LaunchConfig** defines the EC2 parameters ( instance type, PermissiveFirewall, EC2InstanceProfile ,init scripts )
- **Autoscale** launches N servers of type **LaunchConfig**, in our demo case just 1 :)
- **EcsTask** 
- **ELB**
- **EcsService**
