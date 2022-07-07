import fetch from "node-fetch";
import reduce from "lodash/reduce.js";

const resolvers = {
  Query: {
    getQuotes: async (parent, args, context, info) => {
      const res = await fetch("http://localhost:3000/quotes");
      const json = await res.json();

      console.log(json);

      return json;
    },
    getQuote: async (parent, args, context, info) => {
      const res = await fetch(`http://localhost:3000/quotes/${args.id}`);
      const json = await res.json();

      console.log(json);

      return json;
    },
  },
  Mutation: {
    updateQuote: async (parent, { id, input }, context, info) => {
      try {
        const dataToUpdate = reduce(
          input,
          (result, value, key) => {
            const valueExists = !!value;

            if (valueExists) {
              return { ...result, [key]: value };
            }

            return { ...result };
          },
          {}
        );

        const res = await fetch(`http://localhost:3000/quotes/${id}`, {
          method: "PATCH",
          body: JSON.stringify(dataToUpdate),
          headers: {
            "Content-Type": "application/json",
          },
        });

        return await res.json();
      } catch (error) {
        return error;
      }
    },

    addQuote: async (parent, { input }, context, info) => {
      try {
        const { author, quote } = input;

        const res = await fetch(`http://localhost:3000/quotes`, {
          method: "POST",
          body: JSON.stringify({
            author,
            quote,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();

        return json;
      } catch (error) {
        return error;
      }
    },
    deleteQuote: async (undefined, { id }) => {
      try {
        const res = await fetch(`http://localhost:3000/quotes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();

        console.log(json);

        return "Post usunięty";
      } catch (error) {
        return error;
      }
    },
  },
};

export default resolvers;
