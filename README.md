# Ephemeral Frontend Takehome Linklist Web App

## Dependencies
- [Node.js](https://nodejs.org/)

## Local Setup
1. Install dependencies `npm i` 
2. Add `.env` in project root with `GOOGLE_API_KEY` and `MAIN_SHEET_ID` populated with values shared with you

## Local Server
Start local server with `npm run start` and access at `http://localhost:3000/`

## Libraries
- [Embedded JavaScript templates](https://onecompiler.com/cheatsheets/ejs-embedded-javascript-templates) for SSR markup
- [Google Sheets Reader](https://www.npmjs.com/package/g-sheets-api) for injesting sheet data

## Page structure
### Pages
Page paths and corosponding link lists are configured in the [main sheet](https://docs.google.com/spreadsheets/d/1WQnQ5PPO7tkLLO_A_wLtGlhyIbDJ6ict8bDZvgsldtI/edit?usp=sharing)

### Linklist
Each linklist `Link` sheet has a label and corresponding URL referenced in `views/linklist.ejs`

### Config
Each linklist `Config` sheet has properties referenced by `config[0][Column Title]` in `views/linklist.ejs` in order to generate each dynamic page

### How it works
`http://localhost:3000/how` provides instructions on how to create new link list pages
