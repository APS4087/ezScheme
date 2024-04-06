import requests
from bs4 import BeautifulSoup
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Function to scrape all visible data (including tags) from the website
def scrape_website(url):
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract all visible data (including tags) from the webpage
        visible_data = str(soup)
        
        return visible_data  # Return the scraped data
    else:
        print("Failed to retrieve data from the website.")
        return None

# Function to create a PDF with scraped data
def create_pdf(data, filename):
    # Create a new PDF document
    c = canvas.Canvas(filename, pagesize=letter)
    
    # Write the scraped data to the PDF
    c.drawString(100, 750, "Scraped Data:")
    c.drawString(100, 730, data)
    
    # Save the PDF
    c.save()
    print(f"PDF '{filename}' created successfully.")

# Main function
def main():
    # URL of the website to scrape
    url = 'https://www.gobusiness.gov.sg/enterprisejobskills/programmes-and-initiatives/develop-human-capital/#skills-framework'
    
    # Scrape data from the website
    scraped_data = scrape_website(url)
    
    # Check if data was scraped successfully
    if scraped_data:
        # Create a PDF with scraped data
        create_pdf(scraped_data, 'scraped_data.pdf')

if __name__ == "__main__":
    main()
