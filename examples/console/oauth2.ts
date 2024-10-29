import SpacedfSDK from 'spacedf-sdk';

const client = new SpacedfSDK({ organization: 'abc' });

async function main() {
    const oauth2 = await client.oauth2.authorize({
        client_id: 'abc',
        redirect_uri: 'http://localhost:3000',
        scopes: ['organization'],
    });

    console.log('oauth2 response', oauth2);
}

main();
