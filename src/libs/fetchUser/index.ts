type User = {
  name: string;
  username: string;
  email: string;
};

export async function fetchUser(): Promise<User> {
  const fetchedUser = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await fetchedUser.json();
  return user;
}
