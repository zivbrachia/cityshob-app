# CityshobApp

Q: Which plugins or extensions did you use, explain why in a line or two, no
need to be specific

A: 
  Client-Side
  * PrimeNG
  * Angular 17
  * and more others.
  Server-Side
  * Nodejs
  * Express
  * Mongoose
  * and more others...

Q: How to implement multilingual support for types and names, and what is the
best way to do it? (translations) – since we are getting this data from the
server, provide a way to implement translations assuming you have control
over the server and the client. No need for code just write how you would
implement it

A: Database Design: Add Translations Table
   Server-Side: Fetch Translations, Handle Localization
   Client-Side: Language Selection, Dynamic Translation, ngx-translate, Data Binding
   Synchronize Data: Update Translations

Q: Assuming the server is not in your hands, and you are receiving data from it,
but the data is in a different format, for example its in pascal case, but you
use a different case, how would you handle it, no need to write code, just
explain it in pseudo code if needed.

A: Create Customer Pipe, Pipe Transformation

Q: Using a tool, create a flowchart demonstrating the widget&#39;s operation –
describe the use cases, from the point a user enters the page.

A: PageLoad > fetch data > print data > user enter filters > fetch data > print data 
