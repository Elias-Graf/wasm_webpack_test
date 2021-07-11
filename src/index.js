import init, {format_username, User} from "./wasm_test";

init().then(() => {
  const user = new User("John", "Peter");

  console.log(format_username(user));
});