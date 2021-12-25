import Competition from "../../../../models/competition.js";

const competitionsResolver = {
  competitions: async () => {
    try {
      const competitions = await Competition.find().populate(
        "winnerSubmission"
      );

      const sorted = competitions.sort(function (a, b) {
        var c = new Date(a.endDate);
        var d = new Date(b.endDate);
        return d - c;
      });

      return sorted;

      /*    return competitions.map((competition) => {
        return {
          ...competition._doc,
          _id: competition.id,
          startDate: new Date(competition._doc.startDate).toISOString(),
          endDate: new Date(competition._doc.endDate).toISOString(),
        };
      }); */
    } catch (err) {
      throw err;
    }
  },
};

export default competitionsResolver;
