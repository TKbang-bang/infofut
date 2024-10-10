const express = require("express");
const router = express.Router();
const db = require("./db.js");

router.get("/", (req, res) => {
  const rq = "SELECT * FROM players";
  db.query(rq, (err, data) => {
    if (err) return res.json({ err });
    res.send(data);
  });
});

router.post("/info/:name", (req, res) => {
  const rq = "SELECT * FROM players WHERE name = ?";
  db.query(rq, [req.params.name], (err, player) => {
    if (err) return res.json({ err });
    const id = player[0].player_id;
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
            // console.log({ player, clubWin, selcWin, soloWin, bio });
          });
        });
      });
    });
  });
});

router.post("/search", (req, res) => {
  const { txt } = req.body;
  const rq = "SELECT * FROM players WHERE name like ?";
  db.query(rq, [`%${txt}%`], (err, data) => {
    if (err) return res.json({ err });
    if (data.length > 0) {
      res.json({ ok: true, data });
    } else {
      res.json({ ok: false, message: "No se encontró el jugador" });
    }
  });
});

module.exports = router;
