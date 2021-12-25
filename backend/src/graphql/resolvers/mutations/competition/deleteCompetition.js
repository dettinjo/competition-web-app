import Competition from "../../../../models/competition.js";

const deleteCompetitionResolver = {
  deleteCompetition: async (args, req) => {
    //Check for authentification
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }

    try {
      const competition = await Competition.findById(args.competitionId);
      await Competition.deleteOne({
        _id: args.competitionId,
      });
      return competition;
    } catch (err) {
      throw err;
    }
  },
};

export default deleteCompetitionResolver;
