const { ListDataRepo, SaveDataRepo } = require("../repository/dataRepository");

async function ListAllData(req, res) {
  const Calendars = await ListDataRepo();
  if (Calendars) {
    return res.status(200).json(Calendars).end();
  } else {
    return res.status(400).json({ message: "Loi" }).end();
  }
}
async function SaveDataFile(req, res) {
  const datafile = {
    // req.data
  };
  const result = await SaveDataRepo(datafile);
  if (result) {
    return res.status(200).json(result).end();
  } else {
    return res.status(400).json({ message: "Co loi xay ra" }).end();
  }
}

module.exports = { ListAllData, SaveDataFile };
