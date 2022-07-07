import fs from "fs";

const getJson = async () => {
  const json = await fs.promises.readFile("./database.json");
  return JSON.parse(json).products;
};

const resolvers = {
  Query: {
    getPhones: async (parent, args, context, info) => {
      const json = await getJson();
      console.log(json);
      return json;
    },
    getPhone: async (parent, args, context, info) => {

      const json = await getJson();
      console.log(json);
      return json.find(x => x.id == args.id)

    }
  },
  // Mutation: {

  // },
};

export default resolvers;
