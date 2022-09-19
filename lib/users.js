export const getUsers = async () => {
  const req = await fetch('https://dummyjson.com/users');
  const { users } = await req.json();

  return users;
}