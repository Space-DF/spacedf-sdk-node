import SpaceDFSDK from 'spacedf-sdk';

const client = new SpaceDFSDK();

async function main() {
    const register = await client.auth.register({
        email: 'abc@digitalfortress.dev',
        password: '123123',
        first_name: 'abc',
    });

    console.log('Register response', register);
}

main();
