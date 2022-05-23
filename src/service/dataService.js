const { ListDataRepo, SaveDataRepo } = require("../repository/dataRepository");

async function ListAllData(req, res) {
  const listData = await ListDataRepo();
  if (listData) {
    return res.status(200).json(listData).end();
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
