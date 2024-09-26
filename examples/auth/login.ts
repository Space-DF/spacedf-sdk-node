import SpacedfSDK from 'spacedf-sdk';

const client = new SpacedfSDK();

async function main() {
  const login = await client.auth.login({
    email: 'minh.nguyen@digitalfortress.dev',
    password: '123123',
  });

  console.log('LOGIN response', login);
}

main();
