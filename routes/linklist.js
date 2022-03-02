const express = require('express')
const router = express.Router()
const { getSheetData } = require('../utils/api')

router.get('/', function(req, res, next) {
  const slug = req.baseUrl.replace(/[^a-z0-9_-]/g, "") // remove invalid chars

  /* GET other pages */
  switch(slug) {
    case 'how':
      res.render('how', { 
        title: 'How it works',
      })
      return;
  }

  let config = []
  let links = []
  getSheetData('Links', process.env.MAIN_SHEET_ID, (results) => {
    links = results
    const link = links.find(link => link.Path === slug)
    const ID = link.Sheet.substring(link.Sheet.lastIndexOf('/') + 1)

    getSheetData('Config', ID, (results) => {
      config = results

      getSheetData('Links', ID, (results) => {
        res.render('linklist', { 
          path: `${slug}`,
          links: results,
          config: config,
        })

      }, (err) => { 
        res.render('error', { 
          error: {status: err},
        })
      })
    }, (err) => { 
      res.render('error', { 
        error: {status: err},
      })
    })
  }, (err) => { 
    res.render('error', { 
      error: {status: err},
    })
  })
})

module.exports = router
