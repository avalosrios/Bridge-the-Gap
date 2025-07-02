//USER TYPE:
// Store part of the user information with the session
// Should be better than having to search for our user in the DB everytime for simple information
interface User {
  username: string;
  id: number;
}
