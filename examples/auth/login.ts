import SpacedfSDK from 'spacedf-sdk';

const client = new SpacedfSDK({ organization: 'abc', apiKey: 's' });

async function main() {
    const login = await client.auth.login({
        email: 'test@digitalfortress.dev',
        password: '123123',
    });

    console.log('LOGIN response', login);
}

main();
