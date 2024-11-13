import SpaceDFSDK from '@space-df/sdk';

const client = new SpaceDFSDK({ organization: 'abc' });

async function main() {
    const login = await client.auth.login({
        email: 'test@digitalfortress.dev',
        password: '123123',
    });

    console.log('LOGIN response', login);
}

main();
