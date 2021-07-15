const SEARCHAPI = 'https://www.omdbapi.com/?apikey=46a1a063&t=';
var movsug = {
    "MV00": [ "Kill Bill: Vol. 1" ,  "Fight Club"] ,
    "MV11": [ "Punch-Drunk Love" , "Jaws"],
    "MV22": [ "Schindler\'s List" , "Forrest Gump"],
    "MV33": [ "Bottle Rocket" , "Frances Ha"],
    "MV01": [ "Magnolia" , "Zodiac"],
    "MV02": [ "Catch me if You Can" , "The Grand Budapest Hotel"]    ,
    "MV03": ["Midnight in Paris" ,"Once upon a time in Hollywood"]   ,
    "MV12": ["Pulp Fiction" ,"Mr. Nobody"]   ,
    "MV13": ["The Breakfast Club" ,"(500) Days of Summer"]    ,
    "MV10": ["City of God" ,"1917"]    ,
    "MV20": ["Saving Private Ryan" ,"Goodfellas"],
    "MV23": ["Annie Hall" ,"The Darjeeling Limited"],
    "MV21": ["The Prestige" ,"Vertigo"],
    "MV31": ["Inception" ,"The Irishman"],
    "MV32": ["The Curious case of Benjamin Button" ,"The Shawshank Redemption"],
    "MV30": ["The Dark Knight" ,"Django Unchained"]
}
var movies={
    "Kill Bill: Vol. 1":{"Title":"Kill Bill: Vol. 1","Year":"2003","Released":"10 Oct 2003","Runtime":"111 min","Director":"Quentin Tarantino","Writer":"Quentin Tarantino, Uma Thurman","Actors":"Uma Thurman, David Carradine, Daryl Hannah","Plot":"After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.","Language":"English, Japanese, French","Awards":"29 wins & 103 nominations total","Metascore":"69","imdbRating":"8.1","Poster":"https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
    "Fight Club":{"Title":"Fight Club","Year":"1999","Released":"15 Oct 1999","Runtime":"139 min","Director":"David Fincher","Writer":"Chuck Palahniuk, Jim Uhls","Actors":"Brad Pitt, Edward Norton, Meat Loaf","Plot":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.","Language":"English","Awards":"Nominated for 1 Oscar. 11 wins & 38 nominations total","Metascore":"66","imdbRating":"8.8","Poster":"https://image.posterlounge.com/img/products/680000/676414/676414_poster_l.jpg"},
    "Punch-Drunk Love":{"Title":"Punch-Drunk Love","Year":"2002","Rated":"R","Released":"01 Nov 2002","Runtime":"95 min","Genre":"Comedy, Drama, Romance, Thriller","Director":"Paul Thomas Anderson","Writer":"Paul Thomas Anderson","Actors":"Adam Sandler, Jason Andrews, Don McManus, Emily Watson","Plot":"A frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know that he will land in huge trouble and will also jeopardise his relationship with Lena.","Language":"English","Country":"USA","Awards":"14 wins & 37 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"79%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.3"},
    "Jaws": {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Thriller","Director":"Steven Spielberg","Writer":"Peter Benchley (screenplay), Carl Gottlieb (screenplay), Peter Benchley (based on the novel by)","Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary","Plot":"When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.","Language":"English","Country":"USA","Awards":"Won 3 Oscars. Another 13 wins & 20 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.0"},
    "Schindler\'s List": {"Title":"Schindler's List","Year":"1993","Rated":"R","Released":"04 Feb 1994","Runtime":"195 min","Genre":"Biography, Drama, History","Director":"Steven Spielberg","Writer":"Thomas Keneally (book), Steven Zaillian (screenplay)","Actors":"Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall","Plot":"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.","Language":"English, Hebrew, German, Polish, Latin","Country":"USA","Awards":"Won 7 Oscars. Another 85 wins & 49 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.9/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.9"},
    "Forrest Gump":{"Title":"Forrest Gump","Year":"1994","Rated":"PG-13","Released":"06 Jul 1994","Runtime":"142 min","Genre":"Drama, Romance","Director":"Robert Zemeckis","Writer":"Winston Groom (novel), Eric Roth (screenplay)","Actors":"Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys","Plot":"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 44 wins & 75 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"8.8"},
    "Bottle Rocket": {"Title":"Bottle Rocket","Year":"1996","Rated":"R","Released":"21 Feb 1996","Runtime":"91 min","Genre":"Comedy, Crime, Drama","Director":"Wes Anderson","Writer":"Owen Wilson, Wes Anderson","Actors":"Luke Wilson, Owen Wilson, Ned Dowd, Shea Fowler","Plot":"Three friends plan to pull off a simple robbery and go on the run.","Language":"English, Spanish","Country":"USA","Awards":"2 wins & 1 nomination.","Poster":"https://m.media-amazon.com/images/M/MV5BYjZjYjJmZTItOGRhNy00MmIyLTllODYtMzJlMTMxMzkyODc2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.0"},
    "Frances Ha":{"Title":"Frances Ha","Year":"2012","Rated":"R","Released":"23 Aug 2013","Runtime":"86 min","Genre":"Comedy, Drama, Romance","Director":"Noah Baumbach","Writer":"Noah Baumbach, Greta Gerwig","Actors":"Greta Gerwig, Mickey Sumner, Michael Esper, Adam Driver","Plot":"A New York woman (who doesn't really have an apartment) apprentices for a dance company (though she's not really a dancer) and throws herself headlong into her dreams, even as the possibility of realizing them dwindles.","Language":"English, French","Country":"USA, Brazil","Awards":"1 win & 49 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTY0NDQ2NzQ2N15BMl5BanBnXkFtZTcwMTU0OTkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.5"},
    "Magnolia":{"Title":"Magnolia","Year":"1999","Rated":"R","Released":"07 Jan 2000","Runtime":"188 min","Genre":"Drama","Director":"Paul Thomas Anderson","Writer":"Paul Thomas Anderson","Actors":"Tom Cruise, Jason Robards, Julianne Moore","Plot":"An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.","Language":"English, German, French","Country":"United States","Awards":"Nominated for 3 Oscars. 28 wins & 59 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjk3YThkNDktNjZjMS00MTBiLTllNTAtYzkzMTU0N2QwYjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"8.0"},
    "Zodiac":{"Title":"Zodiac","Year":"2007","Rated":"R","Released":"02 Mar 2007","Runtime":"157 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"David Fincher","Writer":"James Vanderbilt (screenplay), Robert Graysmith (book)","Actors":"Jake Gyllenhaal, Mark Ruffalo, Anthony Edwards, Robert Downey Jr.","Plot":"In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.","Language":"English","Country":"USA","Awards":"4 wins & 72 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"7.7"},
    "Catch me if You Can":{"Title":"Catch Me If You Can","Year":"2002","Rated":"PG-13","Released":"25 Dec 2002","Runtime":"141 min","Genre":"Biography, Crime, Drama","Director":"Steven Spielberg","Writer":"Jeff Nathanson (screenplay), Frank Abagnale Jr. (book), Stan Redding (book)","Actors":"Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen","Plot":"Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.","Language":"English, French","Country":"USA, Canada","Awards":"Nominated for 2 Oscars. Another 16 wins & 44 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"8.1"},
    "The Grand Budapest Hotel":{"Title":"The Grand Budapest Hotel","Year":"2014","Rated":"R","Released":"28 Mar 2014","Runtime":"99 min","Genre":"Adventure, Comedy, Crime","Director":"Wes Anderson","Writer":"Stefan Zweig (inspired by the writings of), Wes Anderson (screenplay), Wes Anderson (story), Hugo Guinness (story)","Actors":"Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody","Plot":"A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.","Language":"English, French, German","Country":"USA, Germany","Awards":"Won 4 Oscars. Another 130 wins & 226 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"88/100"}],"Metascore":"88","imdbRating":"8.1"},
    "Midnight in Paris":{"Title":"Midnight in Paris","Year":"2011","Rated":"PG-13","Released":"10 Jun 2011","Runtime":"94 min","Genre":"Comedy, Fantasy, Romance","Director":"Woody Allen","Writer":"Woody Allen","Actors":"Owen Wilson, Rachel McAdams, Kathy Bates","Plot":"While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.","Language":"English, French, Spanish, German","Country":"Spain, United States, France","Awards":"Won 1 Oscar. 26 wins & 103 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"7.7"},
    "Once upon a time in Hollywood":{"Title":"Once upon a time in Hollywood", "Year":"2019","Runtime":"172","Director":"Queintin Tarantino","Writers":"Queintin Tarantino","Actors":"Leonardo DiCaprio, Brad Pitt, Margot Robbie","Plot":"Queintin goes for alternate history, recreating and rewriting a happy ending for a tragedy that took place when Hollywood was really beautiful","Language":"English","Awards":"Best Production Design","Poster":"https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png","Metascore":"78","imdbRating":"7.6"},
    "Pulp Fiction":{"Title":"Pulp Fiction","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"154 min","Genre":"Crime, Drama","Director":"Quentin Tarantino","Writer":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","Actors":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","Plot":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","Country":"USA","Awards":"Won 1 Oscar. Another 69 wins & 75 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.9/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.9"},
    "Mr. Nobody":{"Title":"Mr. Nobody","Year":"2009","Rated":"R","Released":"26 Sep 2013","Runtime":"141 min","Genre":"Drama, Fantasy, Romance, Sci-Fi","Director":"Jaco Van Dormael","Writer":"Jaco Van Dormael","Actors":"Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham","Plot":"A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.","Language":"English, Mohawk","Country":"Belgium, Germany, Canada, France, UK, Luxembourg, USA","Awards":"11 wins & 6 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"68%"},{"Source":"Metacritic","Value":"63/100"}],"Metascore":"63","imdbRating":"7.8"},
    "The Breakfast Club":{"Title":"The Breakfast Club","Year":"1985","Rated":"R","Released":"15 Feb 1985","Runtime":"97 min","Genre":"Comedy, Drama","Director":"John Hughes","Writer":"John Hughes","Actors":"Emilio Estevez, Judd Nelson, Molly Ringwald","Plot":"Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.","Language":"English","Country":"United States","Awards":"4 wins","Poster":"https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.8"},
    "(500) Days of Summer":{"Title":"(500) Days of Summer","Year":"2009","Rated":"PG-13","Released":"07 Aug 2009","Runtime":"95 min","Genre":"Comedy, Drama, Romance","Director":"Marc Webb","Writer":"Scott Neustadter, Michael H. Weber","Actors":"Zooey Deschanel, Joseph Gordon-Levitt, Geoffrey Arend","Plot":"An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.","Language":"English, French, Swedish","Country":"United States","Awards":"17 wins & 58 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"7.7"},
    "City of God":{"Title":"City of God","Year":"2002","Rated":"R","Released":"13 Feb 2004","Runtime":"130 min","Genre":"Crime, Drama","Director":"Fernando Meirelles, Kátia Lund(co-director)","Writer":"Paulo Lins (novel), Bráulio Mantovani (screenplay)","Actors":"Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva","Plot":"In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.","Language":"Portuguese","Country":"Brazil, France, Germany","Awards":"Nominated for 4 Oscars. Another 74 wins & 46 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.6"},
    "1917":{"Title":"1917","Year":"2019","Rated":"R","Released":"10 Jan 2020","Runtime":"119 min","Genre":"Drama, Thriller, War","Director":"Sam Mendes","Writer":"Sam Mendes, Krysty Wilson-Cairns","Actors":"Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth","Plot":"April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.","Language":"English, French, German","Country":"USA, UK, India, Spain, Canada, China","Awards":"Won 3 Oscars. Another 130 wins & 199 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.3"},
    "Saving Private Ryan":{"Title":"Saving Private Ryan","Year":"1998","Rated":"R","Released":"24 Jul 1998","Runtime":"169 min","Genre":"Drama, War","Director":"Steven Spielberg","Writer":"Robert Rodat","Actors":"Tom Hanks, Tom Sizemore, Edward Burns, Barry Pepper","Plot":"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.","Language":"English, French, German, Czech","Country":"USA","Awards":"Won 5 Oscars. Another 74 wins & 75 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"91/100"}],"Metascore":"91","imdbRating":"8.6"},
    "Goodfellas":{"Title":"Goodfellas","Year":"1990","Rated":"R","Released":"21 Sep 1990","Runtime":"146 min","Genre":"Biography, Crime, Drama","Director":"Martin Scorsese","Writer":"Nicholas Pileggi (book), Nicholas Pileggi (screenplay), Martin Scorsese (screenplay)","Actors":"Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco","Plot":"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.","Language":"English, Italian","Country":"USA","Awards":"Won 1 Oscar. Another 43 wins & 38 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"8.7"},
    "Annie Hall":{"Title":"Annie Hall","Year":"1977","Rated":"PG","Released":"20 Apr 1977","Runtime":"93 min","Genre":"Comedy, Romance","Director":"Woody Allen","Writer":"Woody Allen, Marshall Brickman","Actors":"Woody Allen, Diane Keaton, Tony Roberts, Carol Kane","Plot":"Alvy Singer, a divorced Jewish comedian, reflects on his relationship with ex-lover Annie Hall, an aspiring nightclub singer, which ended abruptly just like his previous marriages.","Language":"English, German","Country":"USA","Awards":"Won 4 Oscars. Another 27 wins & 8 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.0"},
    "The Darjeeling Limited":{"Title":"The Darjeeling Limited","Year":"2007","Rated":"R","Released":"26 Oct 2007","Runtime":"91 min","Genre":"Adventure, Comedy, Drama","Director":"Wes Anderson","Writer":"Wes Anderson, Roman Coppola, Jason Schwartzman","Actors":"Owen Wilson, Adrien Brody, Jason Schwartzman","Plot":"A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.","Language":"English, Hindi, German, Punjabi, Tibetan, French","Country":"United States, India","Awards":"4 wins & 4 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTM0MTQ4MTgwOF5BMl5BanBnXkFtZTcwMDA3MDU1MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"69%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.2"},
    "The Prestige":{"Title":"The Prestige","Year":"2006","Rated":"PG-13","Released":"20 Oct 2006","Runtime":"130 min","Genre":"Drama, Mystery, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan, Christopher Priest","Actors":"Christian Bale, Hugh Jackman, Scarlett Johansson","Plot":"After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.","Language":"English","Country":"United Kingdom, United States","Awards":"Nominated for 2 Oscars. 6 wins & 45 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.5"},
    "Vertigo":{"Title":"Vertigo","Year":"1958","Rated":"PG","Released":"22 May 1958","Runtime":"128 min","Genre":"Mystery, Romance, Thriller","Director":"Alfred Hitchcock","Writer":"Alec Coppel, Samuel A. Taylor, Pierre Boileau","Actors":"James Stewart, Kim Novak, Barbara Bel Geddes","Plot":"A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.","Language":"English","Country":"United States","Awards":"Nominated for 2 Oscars. 8 wins & 7 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"8.3"},
    "Inception":{"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 153 wins & 220 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8"},
    "The Irishman":{"Title":"The Irishman","Year":"2019","Rated":"R","Released":"27 Nov 2019","Runtime":"209 min","Genre":"Biography, Crime, Drama","Director":"Martin Scorsese","Writer":"Steven Zaillian, Charles Brandt","Actors":"Robert De Niro, Al Pacino, Joe Pesci","Plot":"Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.","Language":"English, Italian, Latin, Spanish, German","Country":"United States","Awards":"Nominated for 10 Oscars. 73 wins & 347 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"7.8"},
    "The Curious case of Benjamin Button":{"Title":"The Curious Case of Benjamin Button","Year":"2008","Rated":"PG-13","Released":"25 Dec 2008","Runtime":"166 min","Genre":"Drama, Fantasy, Romance","Director":"David Fincher","Writer":"Eric Roth (screenplay), Eric Roth (story), Robin Swicord (story), F. Scott Fitzgerald (short story)","Actors":"Cate Blanchett, Brad Pitt, Julia Ormond, Faune Chambers Watkins","Plot":"Tells the story of Benjamin Button, a man who starts aging backwards with consequences.","Language":"English, Russian, French","Country":"USA","Awards":"Won 3 Oscars. Another 80 wins & 160 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNjQ0NTY2ODY2M15BMl5BanBnXkFtZTgwMjE4MzkxMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.8"},
    "The Shawshank Redemption":{"Title":"The Shawshank Redemption","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"142 min","Genre":"Drama","Director":"Frank Darabont","Writer":"Stephen King, Frank Darabont","Actors":"Tim Robbins, Morgan Freeman, Bob Gunton","Plot":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","Language":"English","Country":"United States","Awards":"Nominated for 7 Oscars. 21 wins & 43 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.3/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"80/100"}],"Metascore":"80","imdbRating":"9.3"},
    "The Dark Knight":{"Title":"The Dark Knight","Year":"2008","Rated":"PG-13","Released":"18 Jul 2008","Runtime":"152 min","Genre":"Action, Crime, Drama, Thriller","Director":"Christopher Nolan","Writer":"Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)","Actors":"Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine","Plot":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","Language":"English, Mandarin","Country":"USA, UK","Awards":"Won 2 Oscars. Another 157 wins & 163 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"9.0"},
    "Django Unchained":{"Title":"Django Unchained","Year":"2012","Rated":"R","Released":"25 Dec 2012","Runtime":"165 min","Genre":"Drama, Western","Director":"Quentin Tarantino","Writer":"Quentin Tarantino","Actors":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio","Plot":"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.","Language":"English, German, French, Italian","Country":"United States","Awards":"Won 2 Oscars. 58 wins & 158 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.4"}
}
function sugg(){
    document.getElementById('listpage').style.visibility='visible';
    var score='MV';
    var ques1= document.getElementsByName('mood')
    for(i = 0; i < ques1.length; i++) {
        if(ques1[i].checked){
            
            score = score+ques1[i].value;
        }
    }
    var ques2= document.getElementsByName('favgen')
    for(i = 0; i < ques2.length; i++) {
        if(ques2[i].checked){

            score = score+ques2[i].value;
        }
    }
    
 
 const x =   movsug[score];
 
  document.getElementById('resu').innerHTML="You can try "+"<br>"+x[0]+"<br>"+"or "+x[1];
  const p1=movies[x[0]];
  const p2=movies[x[1]];
 
  document.getElementById('leftpos').src=p1["Poster"];
  document.getElementById('rightpos').src=p2["Poster"];
  window.scroll(0,830);
  dels();
  
  function dels(){
      document.getElementById('detailspage').style.visibility="visible";
    document.getElementById('tlt1').innerHTML=p1["Title"]
    document.getElementById('tlt2').innerHTML=p2["Title"]
        document.getElementById('dls1').innerHTML="Release :  "+p1["Year"]+"<br>"+"Director(s) :  "+p1["Director"]+"<br>"+"Written By :  "+p1["Writer"]+"<br>"+"Plot : "+p1["Plot"]+"<br>"+p1["Awards"];
        document.getElementById('dls2').innerHTML="Release :  "+p2["Year"]+"<br>"+"Director(s) :  "+p2["Director"]+"<br>"+"Written By :  "+p2["Writer"]+"<br>"+"Plot : "+p2["Plot"]+"<br>"+p2["Awards"];
        document.getElementById('metascore1').innerHTML=" "+p1["Metascore"]+'%'+"      ";
        document.getElementById('metascore2').innerHTML=" "+p2["Metascore"]+'%'+"      ";
        document.getElementById('iscore1').innerHTML=" "+p1["imdbRating"]+'%';
        document.getElementById('iscore2').innerHTML=" "+p2["imdbRating"]+'%';
    }
   
  // 

}
    
