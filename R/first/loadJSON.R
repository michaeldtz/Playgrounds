library(httr)
library(jsonlite)

URL = "https://drive.google.com/uc?export=download&id=1wJakfRxFFtjBXUII0Z0t9v_AX7xON05N"
result <- GET(URL, query = list(a = 1, b = 2), add_headers(Authorization = "Bearer 1234"))
text <- content(result,"text")
data <- fromJSON(txt=text)
data

