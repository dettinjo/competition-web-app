import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "@mui/material";

export default function Conditions() {
  return (
    <>
      <Card sx={{ boxShadow: 15, borderRadius: 4, marginTop: 5}}>
        <Box style={{ padding: 50 }} bgcolor="#0B142B">
          <Typography variant="h4" component="div" color="white">
            Terms and Conditions:
          </Typography>
          <Typography variant="body1" fontSize="xl" color="white">
            <br />
            <br />
            1. No purchase necessary to enter the prize draw
            <br />
            <br />
            2. This prize draw is open to UK residents aged 13 years or over,
            with the exception of employees of the Promoter, their families,
            agents and anyone else connected with this promotion.
            <br />
            <br />
            3. Entries must be received before the Deadline of the Competition.
            The Promoter accepts no responsibility for any entries that are
            incomplete, illegible, corrupted or fail to reach the Promoter by
            the relevant closing date for any reason. Proof of posting or
            sending is not proof of receipt. Automatically generated entries and
            entries via agents or third parties are invalid and shall not be
            considered. Entries become the property of the Promoter and are not
            returned.
            <br />
            <br />
            4. Only one entry per person. No entrant may win more than one
            prize.
            <br />
            <br />
            5. To enter create a account and submit your results for the
            competition you would like to compete.
            <br />
            <br />
            6. All correctly completed entries will be entered into a prize draw
            which will take place at the end of the Competition. The entrie with
            the best vote by the judges will be the winners.
            <br />
            <br />
            7. The prize for the winner will be to be honored on the winners
            page.
            <br />
            <br />
            8. Prizes are subject to availability. In the event of unforeseen
            circumstances, the Promoter reserves the right (a) to substitute
            alternative prizes of equivalent or greater value and (b) in
            exceptional circumstances to amend or foreclose the promotion
            without notice. No correspondence will be entered into.
            <br />
            <br />
            9. The winners will be notified via email or post by the End of the
            Competition.
            <br />
            <br />
            10. To obtain details of the winner please email stating the name of
            the prize draw in the subject heading within 4 weeks after the
            closing date.
            <br />
            <br />
            11. The Promoter will use any data submitted by entrants only for
            the purposes of running the prize draw, unless otherwise stated in
            the entry details. By entering this prize draw, all entrants consent
            to the use of their personal data by the Promoter for the purposes
            of the administration of this prize draw and any other purposes to
            which the entrant has consented.
            <br />
            <br />
            12. This Promotion is in no way sponsored, endorsed or administered
            by or associated with Facebook. You acknowledge that all information
            and material that you submit to enter this Promotion is submitted to
            the Promoter and not Facebook and you agree that Facebook shall not
            be liable to you in any way in respect of this Promotion.
            <br />
            <br />
            13. The winners agree to take part in reasonable post event
            publicity and to the use of their names and photographs in such
            publicity.
            <br />
            <br />
            14. Promoter may disqualify any entrant whose entry does not comply
            with these terms and conditions (in Promoter’s sole opinion) or who,
            in Promoter’s sole determination, has acted in a manner that is
            fraudulent, dishonest or unjust to other entrants including, without
            limitation, tampering with the operation of the prize draw,
            manipulating or rigging votes, hacking, deceiving, cheating or by
            harassing or threatening other entrants or a representative of
            Promoter.
            <br />
            <br />
            15. By entering the prize draw each entrant agrees to be bound by
            these terms and conditions.
            <br />
            <br />
            16.The Promoter is JUDGE NAME. These terms and conditions are
            governed in accordance with the laws of England and Wales.
          </Typography>
        </Box>
      </Card>
    </>
  );
}
