import SpacedfSDK from 'spacedf-sdk';

const client = new SpacedfSDK();

async function main() {
  const login = await client.auth.register({
    email: 'minh.nguyen@digitalfortress.dev',
    password: '123123',
    first_name: 'Minh test',
  });

  console.log('Register response', login);
}

main();
