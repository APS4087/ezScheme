# ezScheme

https://github.com/APS4087/ezScheme/assets/63306215/d7b289e8-58ea-46da-b68c-dc8d4fb77030

## Making government schemes accessible and tailored for you, as ez like that

### Problem Statement
How can we develop a solution that recommends relevant Singapore Government schemes and services for businesses based on sectors (e.g., financial, manufacturing, sustainability, etc.) and citizens according to their needs?

#### Problems to Solve
1. Scheme information is scattered across 15 government websites.
2. Identifying the schemes (and only the schemes) that a user will be interested in is difficult.

### What ezScheme Offers

#### Feature #1 – LMS Scheme Video Generation
Existing Video Generation models are used for creating user personalized learning content, allowing users to familiarize themselves with the schemes in an interactive way.

#### Feature #2 – LLM Virtual Scheme Assistant
Based on the user's selection of the choice (type of business, etc.), we are able to make the GPT available for any type of queries in that particular grant or scheme. This allows users to quickly get into the details of the schemes they care about.

#### Feature #3 – Recommendation Engine
The recommendation engine allows us to utilize the user's response to identify the schemes available from the PDF database we created. Then from this engine, the selected scheme PDFs are uploaded to the LLM, which allows us to query information on the schemes in a more personalized way.

### What's Next

1. **Smart Scheme Recommendations:** If there are too many schemes to recommend, the LLM will continue to ask questions until it reaches a manageable number of schemes.
   - Behind the scenes, prompt engineering will continually ask the LLM if it has 5 or fewer schemes to recommend.
   - Topic-based model questions.

2. **Business-saved context:** Context will be saved for each business so that over time, the model will get better at anticipating users' needs.

3. **Predict relevant schemes:** Use data on existing business scheme usage to train our recommendation engine to predict which schemes will be more useful for users.

4. **Scrape-a-thon:** Coordinated web-scraping to gather all scheme info across all government websites.
   - For this project, we've collected information on 89 government schemes.

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.




