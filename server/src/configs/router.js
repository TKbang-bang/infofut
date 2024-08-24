const express = require("express");
const router = express.Router();
const db = require("./db.js");
let id;

router.get("/", (req, res) => {
  const rq = "SELECT * FROM players";
  db.query(rq, (err, data) => {
    if (err) return res.json({ err });
    res.send(data);
  });
});

router.post("/putid", (req, res) => {
  id = req.body.playerId;
});

router.get("/info", (req, res) => {
  const rq = "SELECT * FROM players WHERE player_id = ?";
  db.query(rq, [id], (err, player) => {
    if (err) return res.json({ err });
    // req.params.player = player.player_name;
    const rqClubs =
      "SELECT (SELECT comp_name FROM competitions WHERE comp_id = club_win.comp_id) AS competition,year, team FROM club_win WHERE player_id = ? ORDER BY year";
    db.query(rqClubs, [id], (clErr, clubWin) => {
      if (clErr) return res.json(clErr);
      const slrq =
        "SELECT (SELECT comp_name FROM competitions WHERE comp_id = selection_win.comp_id) AS competition, year, selection FROM selection_win WHERE player_id = ? ORDER BY year";
      db.query(slrq, [id], (errsl, selcWin) => {
        if (errsl) return res.json({ errsl });
        const solorq =
          "SELECT (SELECT trof_name FROM solo_trophies WHERE trof_id = solo_win.trof_id) AS premio, year FROM solo_win WHERE player_id = ? ORDER BY year";

        db.query(solorq, [id], (errsl, soloWin) => {
          if (errsl) return res.json({ errsl });
          const biorq = "SELECT * FROM biography WHERE bio_id = ?";
          db.query(biorq, [id], (errbio, bio) => {
            if (errbio) return res.json(errbio);
            res.json({ player, clubWin, selcWin, soloWin, bio });
          });
        });
      });
    });
  });
});

router.get("/search", (req, res) => {
  const rq = "SELECT * FROM players";
  db.query(rq, (err, data) => {
    if (err) return res.json({ err });
    res.send(data);
  });
});

module.exports = router;
