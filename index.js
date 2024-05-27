import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';

// Initialize an ApolloGateway instance and pass it
// the supergraph schema
const gateway = new ApolloGateway({
  serviceList:[
    {name:'users', url: 'http://user-service-env.eba-avgsbjhu.ap-south-1.elasticbeanstalk.com/graphql'},
    {name:'products', url: 'http://product-service-env.eba-jqvznppe.ap-south-1.elasticbeanstalk.com/graphql'},

  ]
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway, subscriptions:false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});