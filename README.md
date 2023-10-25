![Congress.gov Logo](https://www.congress.gov/img/congress_gov_logo2.png)  
   
# CongreSearch

CongreSearch empowers you to flexibly and efficiently track activities in the United States Federal Congress. Taking advantage of the [congress.gov API](https://github.com/LibraryOfCongress/api.congress.gov/), this platform will keep you up-to-date on bills and committee meetings (further features still to come). Become a DC in-the-know insider before you know it! 

## MVP Goals/Features/User Stories

* AUTHENTICATION: 
  * Secure log in using Google OAuth
  * Secure Create, Update, Delete operations using middleware
* CONGRESSIONAL COMMITTEE MEETINGS: 
  * Select from a shortlist of congressional committees (House/Senate Appropriations, House/Senate Science, Space and Technology) to 'follow' 
  * Update selected committees
  * For each selected committee, see all future meetings as soon as they are scheduled (and the user logs in)
  * See a user-friendly display of each meeting's details, including meeting chamber, type, title, related committees, date, and links to hearing transcripts, documents, and videos (when available) 
* BILLS: 
  * Input a congress number (defaults to current congress, 118), bill type, and search keyword to see a list of bills from that congress, of that type, and whose titles contain the keyword
  * See a user-friendly display of each bill's details, including policy area, title, and associated committees 

## Stretch Goals/Features/User Stories

* USER INTERFACE (UI)
  * Implement an expanding table to show meeting transcripts and bill text, instead of taking users to a separate details/show page.
* FEATURES
  * Implement more advanced search interface for bills, allowing 
    * Boolean chains of multiple keywords in the title
    * Searching for keywords in the bill text
  * Select bills to 'follow'
  * Display further bill details such as sponsors, tables of actions and/or amendments
  * Include links/text of committee reports
  * User can configure email notifications when there are certain types of changes to a 'followed' item, i.e.:
    * A new committee meeting is scheduled
    * Bill text becomes available
    * Bill amendments are added
  * Create a User Profile with a avatar picture, username, and list of previous/current 'followed' bills & committees

## ERD

<img src="public/images/2023-10 Project 2 CongreSearch ERD.png" alt="Relationship Diagram (ERD)" width = 450>

## RESTful Routing

| HTTP Method | URL                                            | CRUD   | Response                | Notes                                                                          |
| ----------- | ---------------------------------------------- | ------ | ----------------------- | ------------------------------------------------------------------------------ |
| GET         | /                                              | INDEX  |                         | Login/landing page                                                             |
| GET         | /users/:user_id                                | SHOW   | { user }                | User homepage                                                                  |
| POST        | /users                                         | CREATE | { user }                | Create new user                                                                |
| DELETE      | /users/:user_id                                | DELETE |                         | Delete user                                                                    |
| GET         | /committee-meeting                             | INDEX  |                         | Display committee meetings from :congress associated with followedCommittee(s) |
| GET         | /committee-meeting/:congress/:chamber/:eventID | SHOW   | { committee-meeting }   | Display committee meeting details                                              |
| GET         | /bill/:congress/:type                          | INDEX  | [{ bill }, {bill}, ...] | Get list of bills from :congress containing titleKeyword                       |
| GET         | /bill/:congress/:type/:billNumber              | SHOW   | { bill }                | Display bill details                                                           |

## Wireframes

