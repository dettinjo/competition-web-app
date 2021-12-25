import Competition from "../../../../models/competition.js";

const createCompetitionResolver = {
  createCompetition: async (args, req) => {
    //Check for authentification
    /*if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    */

    const comp = new Competition({
      title: args.competitionInput.title,
      description: args.competitionInput.description,
      excerpt: args.competitionInput.excerpt,
      startDate: new Date(args.competitionInput.startDate),
      endDate: new Date(args.competitionInput.endDate),
    });
    try {
      const result = await comp.save();
      return {
        ...result._doc,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default createCompetitionResolver;
