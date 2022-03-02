const GSheetReader = require('g-sheets-api')

const getSheetData = (sheetName, ID, callback, error) => {
  GSheetReader(
    {
      sheetId: ID,
      sheetName: sheetName,
      returnAllResults: true,
      apiKey: process.env.GOOGLE_API_KEY
    },
    callback,
    error
  )
}

module.exports = { getSheetData }