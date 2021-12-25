import Competition from "../../../../models/competition.js";

const competitionResolver = {
  competition: async (args) => {
    try {
      const competition = await Competition.findById(args.id);

      return {
        ...competition._doc,
        _id: competition.id,
      };
    } catch (err) {
      throw err;
    }
  },
};

export default competitionResolver;
