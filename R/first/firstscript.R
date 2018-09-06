library(httr)
library(jsonlite)

# Construct star_wars_matrix
box_office <- c(460.998, 314.4, 290.475, 247.900, 309.306, 165.8)
star_wars_matrix <- matrix(box_office, nrow = 3, byrow = TRUE,
                           dimnames = list(c("A New Hope", "The Empire Strikes Back", "Return of the Jedi"), 
                                           c("US", "non-US")))

# The worldwide box office figures
worldwide_vector <- rowSums(star_wars_matrix)

# Bind the new variable worldwide_vector as a column to star_wars_matrix
all_wars_matrix <- cbind(star_wars_matrix, worldwide_vector)

result <- GET("https://drive.google.com/uc?export=download&id=1yt5DYm0Ho9SRYCL1OdmxT2F_19Jphld0", query = list(a = 1, b = 2), add_headers(Authorization = "Bearer 1234"))
text <- textConnection(content(result,"text"))
data <- read.csv(text)
data

result

result2 <- GET("https://postman-echo.com/get", query = list(foo1 = "Jsad"), add_headers(Authorization = "Bearer 1234"))
content(result2,"text")