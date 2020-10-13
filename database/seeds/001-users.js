
exports.seed = function(knex) {
const users = [
  {
    username: "samwise",
    password: "gamgee",
    department: "sales"
  },
  {
    username: "frodo",
    password: "baggins",
    department: "sales"
  },
  {
    username: "gandalf",
    password: "thegrey",
    department: "management"
  }
]
return knex("users").insert(users)
};
