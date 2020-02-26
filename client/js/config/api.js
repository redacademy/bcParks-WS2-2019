import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://us1.prisma.sh/zareef-baksh/bcParks/dev',
});

export default client;